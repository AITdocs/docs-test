# 与AI共同构建

AI是一种新型的编程原语。大语言模型（LLMs）让我们能够编写出可以以**常识性**方式处理**非结构化**信息的软件。

试想这样一个任务：编写一个程序，从下面这段文字中提取出所有人名的列表：

> 如今其他的希腊王子们都安然酣睡了一整夜，但阿伽门农却心绪不宁，难以入眠。就像赫拉的丈夫宙斯在天空中闪烁他的闪电，预示着倾盆大雨、冰雹或雪花使大地变白的积雪，又或是他要张开饥饿战争的巨口的征兆一样，阿伽门农也发出了一次次沉重的叹息，他的内心充满震颤。当他望向特洛伊平原时，看到伊利翁城前燃烧着无数警卫的篝火，不禁大为惊叹…… ——《伊利亚特》，第十卷

对人类而言，提取名字轻而易举，但如果仅使用传统编程方法则非常困难。要编写一个能够从任意段落中提取名字的通用程序更是难上加难。

然而，有了LLM（大语言模型），这项任务几乎变得微不足道。我们只需将以下输入提供给一个LLM：

> 列出以下段落中出现的所有人名，用逗号分隔：如今其他的希腊王子们都安然酣睡了一整夜，但阿伽门农却心绪不宁，难以入眠。就像赫拉的丈夫宙斯在天空中闪烁他的闪电，预示着倾盆大雨、冰雹或雪花使大地变白的积雪，又或是他要张开饥饿战争的巨口的征兆一样，阿伽门农也发出了一次次沉重的叹息，他的内心充满震颤。当他望向特洛伊平原时，看到伊利翁城前燃烧着无数警卫的篝火，不禁大为惊叹…… ——《伊利亚特》，第十卷

输出结果将会是正确的：

> 阿伽门农, 阿特柔斯, 赫拉

将LLM集成到软件应用中就像调用API一样简单。虽然不同LLM的API细节可能有所不同，但大多数都遵循一些通用的模式：

* 对API的调用通常包括包含模型标识符 `model` 和消息列表 `messages` 的参数。
* 每条 `message` 都有 `role` 和 `content` 两个属性。
* `system` 角色可以视为对模型的*指令*。
* `user` 角色可以视为需要处理的*数据*。

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
    system_prompt = "You are a name extractor. The user will give you text, and you must return a JSON array of names mentioned in the text.不要包含任何解释或格式。"

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
        'You are a name extractor. The user will give you text, and you must return a JSON array of names mentioned in the text.不要包含任何解释或格式。';

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