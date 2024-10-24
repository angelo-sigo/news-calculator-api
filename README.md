# NEWS Calculator API

Uma API permite calcular a pontuação na Escala NEWS. A API recebe dados vitais dos pacientes e retorna a pontuação correspondente, facilitando o monitoramento e a tomada de decisão clínica.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Rotas da API](#rotas-da-api)
- [Licença](#licença)

## Instalação

Para instalar e configurar o ambiente de desenvolvimento, siga os passos abaixo:

```bash
git clone https://github.com/angelo-sigo/news-calculator-api.git
cd news-calculator-api
npm install
```

## Uso

Para iniciar a API:

```bash
npm start
```

## Rotas da API

### **POST /score**

Calcula a pontuação NEWS com base nos dados vitais fornecidos.

Exemplo de requisição:

```json
{
  "respiratory_rate": 12,
  "oxygen_saturation": 80,
  "supplemental_oxygen": false,
  "temperature": 40,
  "systolic_blood_pressure": 150,
  "heart_rate": 60,
  "level_of_consciousness": "Alert"
}
```

Exemplo de resposta:

```json
{
  "scores": {
    "total_score":5,
    "respiratory_rate_score":0,
    "oxygen_saturation_score":3,
    "supplemental_oxygen_score":0,
    "temperature_score":2,
    "blood_pressure_score":0,
    "heart_rate_score":0,
    "consciousness_score":0
  }
}
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.