// Exemplo de backend seguro para o Outlier AI.
// Hospede como função serverless e configure GEMINI_API_KEY no ambiente.
// NÃO coloque a chave no GitHub Pages.
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || 'https://maxoutlier7-jpg.github.io');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({error:'Método não permitido'});
  if (!process.env.GEMINI_API_KEY) return res.status(503).json({error:'IA não configurada'});
  const {question, context={}} = req.body || {};
  if (!question || typeof question !== 'string' || question.length > 3000) return res.status(400).json({error:'Pergunta inválida'});
  const system = 'Você é Outlier AI, assistente educacional do Outlier OS. Responda em português brasileiro, com clareza e objetividade. Analise planos de 30, 90 e 365 dias, renda/caixa, habilidades e ofertas. Priorize ações práticas, premissas e riscos. Não prometa resultados, não invente dados e não trate conteúdo como recomendação financeira individual. Quando faltarem dados, diga exatamente o que falta.';
  const prompt = system+'\\n\\nCONTEXTO DO USUÁRIO:\\n'+JSON.stringify(context)+'\\n\\nPERGUNTA:\\n'+question;
  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+':generateContent?key='+encodeURIComponent(process.env.GEMINI_API_KEY);
  try {
    const r = await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:prompt}]}],generationConfig:{temperature:.4,maxOutputTokens:1200}})});
    const data = await r.json();
    if(!r.ok) return res.status(502).json({error:'Falha no provedor de IA'});
    const answer=(data.candidates?.[0]?.content?.parts||[]).map(p=>p.text||'').join('').trim();
    return res.status(200).json({answer:answer||'Não foi possível gerar uma resposta.'});
  } catch(e) { return res.status(500).json({error:'Erro interno'}); }
}
