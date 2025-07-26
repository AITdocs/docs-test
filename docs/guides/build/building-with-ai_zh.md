# 使用人工智能进行构建

人工智能是一种新型的编程基本要素。大语言模型（LLMs）让我们能够编写出以**常识性方式**处理**非结构化**信息的软件。

假设我们有一个任务：编写一个程序，从下面这段文字中提取出所有人名的列表：

> 现在，其他阿开奥斯人的王子们都整夜酣睡，但阿特柔斯之子阿伽门农却心绪不宁，无法入眠。就像赫拉美丽的丈夫在天空中闪耀闪电，预示着大雨、冰雹或雪花覆盖大地的暴风雪，又或作为即将开启饥饿战争的宽大颚口的征兆一样，阿伽门农也发出一声声沉重的叹息，因为他的灵魂在颤抖。当他望向特洛伊平原时，他惊讶地看到伊利翁城前燃烧着无数的警卫篝火…… ——《伊利亚特》第十卷

对人类来说，提取名字很容易，但如果仅使用传统编程方法就非常困难。而要编写一个能从任何段落中提取名字的通用程序则更加困难。

然而，使用大语言模型（LLM），这个任务几乎变得微不足道。我们只需向LLM提供如下输入：

> 请列出以下段落中出现的所有人名，用逗号分隔：现在，其他阿开奥斯人的王子们都整夜酣睡，但阿特柔斯之子阿伽门农却心绪不宁，无法入眠。就像赫拉美丽的丈夫在天空中闪耀闪电，预示着大雨、冰雹或雪花覆盖大地的暴风雪，又或作为即将开启饥饿战争的宽大颚口的征兆一样，阿伽门农也发出一声声沉重的叹息，因为他的灵魂在颤抖。当他望向特洛伊平原时，他惊讶地看到伊利翁城前燃烧着无数的警卫篝火…… ——《伊利亚特》第十卷

输出结果将会是正确的：

> 阿伽门农, 阿特柔斯, 赫拉

将LLM集成到软件应用程序中就如同调用API一样简单。尽管不同LLM的API细节可能有所不同，但大多数已经形成了一些通用的模式：

* 对API的调用通常包括包含模型标识符 `model` 和消息列表 `messages` 的参数。
* 每条 `message` 都包含一个 `role` 和 `content`。
* `system` 角色可以看作是对模型的*指令*。
* `user` 角色可以看作是需要处理的*数据*。

例如，我们可以使用AI编写一个通用函数，从输入文本中提取姓名。

{% CustomTabs %}

{% Tab label="OpenAI" %}

{% TabbedCodeBlock %}

{% Tab label="python" %}
```python
import json
import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def extract_names(text: str) -> list[str]:
    system_prompt = "You are a name extractor. The user will give you text, and you must return a JSON array of names mentioned in the text. Do not include any explanation or formatting."

    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": text}
        ]
    )

    response = response.choices[0].message["content"]
    return json.loads(response)
```
{% /Tab %}

{% Tab label="typescript" %}
```typescript
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function extractNames(text: string): Promise<string[]> {
    const systemPrompt =
        'You are a name extractor. The user will give you text, and you must return a JSON array of names mentioned in the text. Do not include any explanation or formatting.';

    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: text },
        ]
    });

    const responseText = chatCompletion.choices[0].message?.content ?? '[]';
    return JSON.parse(responseText);
}
```
{% /Tab %}

{% /TabbedCodeBlock %}

{% /Tab %}


{% Tab label="Anthropic" %}

{% TabbedCodeBlock %}

{% Tab label="python" %}
```python
import json
import os
import anthropic

client = anthropic.Anthropic(
    api_key=os.getenv("ANTHROPIC_API_KEY")
)

def extract_names(text: str) -> list[str]:
    system_prompt = "You are a name extractor. The user will give you text, and you must return a JSON array of names mentioned in the text. Do not include any explanation or formatting."

    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1000,
        system=system_prompt,
        messages=[
            {"role": "user", "content": text}
        ]
    )

    response_text = response.content[0].text
    return json.loads(response_text)
```
{% /Tab %}

{% Tab label="typescript" %}
```typescript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function extractNames(text: string): Promise<string[]> {
    const systemPrompt =
        'You are a name extractor. The user will give you text, and you must return a JSON array of names mentioned in the text. Do not include any explanation or formatting.';

    const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [
            { role: 'user', content: text },
        ]
    });

    const responseText = message.content[0]?.type === 'text' ? message.content[0].text : '[]';
    return JSON.parse(responseText);
}
```
{% /Tab %}

{% /TabbedCodeBlock %}

{% /Tab %}

{% /CustomTabs %}