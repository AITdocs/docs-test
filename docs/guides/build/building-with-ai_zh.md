# 与人工智能共同构建

人工智能是一种新型的编程基本要素。大语言模型（LLM）让我们编写出能够以**常识性**的方式处理**非结构化**信息的软件。

试想一个任务：编写一个程序，从以下段落中提取出所有人名的列表：

> 现在其他的阿开亚王子们都整夜酣睡，但阿特柔斯之子阿伽门农却辗转反侧，难以入眠。正如赫拉美丽的丈夫主神宙斯以闪电预示着大雨、冰雹或雪花覆盖大地的降雪，又或是预示着战争饥饿的巨口即将张开，阿伽门农也发出一声声沉重的叹息，他的灵魂在胸中战栗不安。当他望向特洛伊平原时，对无数燃烧在伊利翁城墙外的篝火感到惊异…… ——《伊利亚特》，第十卷

对人类来说，提取人名轻而易举，但如果仅使用传统编程技术来做这件事则非常困难。编写一个能从任意段落中提取名字的通用程序则更加困难。

然而，有了LLM，这个任务几乎变得微不足道。我们只需向LLM提供如下输入：

> 列出以下段落中出现的所有人名，用逗号分隔：现在其他的阿开亚王子们都整夜酣睡，但阿特柔斯之子阿伽门农却辗转反侧，难以入眠。正如赫拉美丽的丈夫主神宙斯以闪电预示着大雨、冰雹或雪花覆盖大地的降雪，又或是预示着战争饥饿的巨口即将张开，阿伽门农也发出一声声沉重的叹息，他的灵魂在胸中战栗不安。当他望向特洛伊平原时，对无数燃烧在伊利翁城墙外的篝火感到惊异…… ——《伊利亚特》，第十卷

输出结果将正确无误：

> 阿伽门农，阿特柔斯，赫拉

将LLM集成到软件应用中，就如同调用API一样简单。尽管不同LLM之间的API具体实现可能有所不同，但大多数已经趋同于一些常见的模式：

* 调用 API 通常包括包含模型（`model`）标识符和 `messages` 列表等参数。
* 每条 `message` 都包含一个 `role` 和 `content`。
* `system` 角色可以看作是对模型的*指令*。
* `user` 角色可以看作是需要处理的*数据*。

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