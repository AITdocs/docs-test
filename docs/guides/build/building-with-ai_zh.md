# 用人工智能进行构建

人工智能是一种新型的编程原语。大语言模型（LLMs）让我们能够编写出以**常识性**方式处理**非结构化**信息的软件。

试想这样一个任务：编写一个程序，从以下段落中提取出所有人名：

> 如今其他的阿开亚王子们都整夜安然入睡，但阿特柔斯之子阿伽门农却心绪不宁，无法入眠。正如赫拉的丈夫宙斯在天空中闪动雷电，预示着暴雨、冰雹或雪花染白大地的寒冬，又或昭示着即将开启饥饿战争的广阔战端，阿伽门农也频频发出沉重的叹息，他的灵魂在体内震颤。当他望向特洛伊平原时，不禁为伊利昂城前燃烧着的无数警卫篝火而惊叹……——《伊利亚特》第十卷

对于人类来说，提取名字很容易，但如果仅使用传统编程方法则非常困难。编写一个能从任意段落中提取名字的通用程序则更加困难。

然而，使用大语言模型（LLM），这项任务几乎变得微不足道。我们只需向LLM提供如下输入：

> 列出以下段落中出现的所有人名，用逗号分隔：如今其他的阿开亚王子们都整夜安然入睡，但阿特柔斯之子阿伽门农却心绪不宁，无法入眠。正如赫拉的丈夫宙斯在天空中闪动雷电，预示着暴雨、冰雹或雪花染白大地的寒冬，又或昭示着即将开启饥饿战争的广阔战端，阿伽门农也频频发出沉重的叹息，他的灵魂在体内震颤。当他望向特洛伊平原时，不禁为伊利昂城前燃烧着的无数警卫篝火而惊叹……——《伊利亚特》第十卷

输出结果将正确无误地是：

> 阿伽门农, 阿特柔斯, 赫拉

将大语言模型（LLM）集成到软件应用中就像调用一个API一样简单。尽管不同LLM之间的API细节可能有所不同，但大多数都趋向于一些通用的模式：

* 对 API 的调用通常包含一些参数，包括 `model` 标识符和一个 `messages` 列表。
* 每条 `message` 都有 `role` 和 `content` 两个属性。
* `system` 角色可以被视为对模型的*指令*。
* `user` 角色可以被视为需要处理的*数据*。

例如，我们可以使用 AI 编写一个通用函数，从输入文本中提取人名。

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