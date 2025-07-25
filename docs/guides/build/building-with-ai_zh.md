# 使用人工智能进行构建

人工智能是一种新型的编程原语。大型语言模型（LLM）让我们能够编写出以**常识性**方式处理**非结构化**信息的软件。

举个例子，如果我们需要编写一个程序，从以下段落中提取所有人名的列表：

> 如今其他的希腊王子们都整夜酣睡，但阿伽门农却辗转反侧，难以入眠。就像赫拉的丈夫宙斯在空中闪耀着闪电，预示着大雨、冰雹或雪花使大地变白的情景，又或作为即将爆发激烈战争的征兆，阿伽门农也一次次深深地叹息，他的内心充满不安。当他望向特洛伊平原时，看到伊利恩城前燃起的无数营火，不禁惊叹不已…… ——《伊利亚特》，第十卷

对人类来说，提取名字很容易，但如果仅使用传统编程方法就非常困难。要写出一个能从任意段落中提取名字的通用程序更是难上加难。

然而，使用大型语言模型（LLM），这项任务几乎变得微不足道。我们只需将以下内容输入LLM：

> 列出以下段落中出现的所有人名，用逗号分隔：如今其他的希腊王子们都整夜酣睡，但阿伽门农却辗转反侧，难以入眠。就像赫拉的丈夫宙斯在空中闪耀着闪电，预示着大雨、冰雹或雪花使大地变白的情景，又或作为即将爆发激烈战争的征兆，阿伽门农也一次次深深地叹息，他的内心充满不安。当他望向特洛伊平原时，看到伊利恩城前燃起的无数营火，不禁惊叹不已…… ——《伊利亚特》，第十卷

输出结果将会是：

> 阿伽门农, 阿特柔斯, 赫拉

将LLM集成到软件应用中就像调用API一样简单。虽然不同LLM的具体API可能有所不同，但大多数都遵循一些通用的模式：

* 对 API 的调用通常包括包含模型标识符 `model` 和消息列表 `messages` 的参数。
* 每条 `message` 都具有 `role` 和 `content`。
* `system` 角色可以看作是给模型的*指令*。
* `user` 角色可以看作是需要处理的*数据*。

例如，我们可以使用 AI 编写一个通用函数，从输入文本中提取姓名。

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