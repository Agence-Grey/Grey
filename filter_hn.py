import json
with open('/root/agence-grey-project/hn_data.json') as f:
    data = json.load(f)
relevant = []
keywords = ['ai', 'agent', 'gpt', 'claude', 'gemini', 'vercel', 'next.js', 'react', 'openai', 'anthropic', 'google', 'llm', 'model', 'deploy', 'design', 'web', 'css', 'frontend', 'framework', 'copilot', 'cursor', 'dev tool', 'programming', 'software', 'code', 'developer', 'api', 'cloudflare', 'browser', 'javascript', 'typescript', 'tailwind', 'shadcn', 'ui', 'ux', 'computer use', 'structured', 'pricing']
for h in data.get('hits',[]):
    t = h['title'].lower()
    if any(k in t for k in keywords):
        relevant.append((h.get('points',0), h['title'], h.get('url','')))
relevant.sort(key=lambda x: -x[0])
for pts, title, url in relevant[:25]:
    print(f'{pts:>4} | {title}')
    print(f'      {url}')
    print()
