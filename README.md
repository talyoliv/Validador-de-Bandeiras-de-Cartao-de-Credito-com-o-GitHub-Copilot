# 💳 Validador de Bandeira de Cartão de Crédito feito com ajuda de Inteligência Artificial
##Desafio de Projeto do Curso - Microsoft 50 Anos - GitHub Copilot

Este projeto é um validador simples de bandeiras de cartão de crédito feito com **HTML, CSS e JavaScript**. Ele utiliza expressões regulares (Regex) para identificar a bandeira de um cartão com base no número informado pelo usuário.

## 📌 Objetivo

Receber um número de cartão de crédito como entrada e identificar qual é a bandeira (Visa, MasterCard, American Express, etc.) com base nos padrões numéricos definidos pelas operadoras.

---

## 🧠 Lógica das Expressões Regulares

Cada bandeira de cartão possui um prefixo numérico específico (BIN) e uma quantidade de dígitos padronizada. 

Abaixo está a tabela com os padrões utilizados:

### 🧠 Lógica com Regex

Cada bandeira tem um padrão único de início e quantidade de dígitos. Abaixo, um resumo das principais:

| **Bandeira**       | **Início/Padrão**                           | **Dígitos**     |
|--------------------|---------------------------------------------|-----------------|
| **Visa**           | Começa com 4                                | 13 ou 16        |
| **MasterCard**     | Começa com 51–55 ou 2221–2720               | 16              |
| **American Express** | Começa com 34 ou 37                       | 15              |
| **Diners Club**    | Começa com 300–305, 36 ou 38                | 14              |
| **Discover**       | Começa com 6011, 622126–622925, 64, 65      | 16              |
| **EnRoute**        | Começa com 2014 ou 2149                     | 15              |
| **JCB**            | Começa com 3528–3589                        | 16              |
| **Voyager**        | Começa com 8699                             | 15              |
| **HiperCard**      | Começa com 38 ou 60                         | 13–19           |
| **Aura**           | Começa com 50                               | 19              |
|

---

## Cloud Computing Service
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

[Link para Visualização do Validador de Bandeira de Cartão de Crédito](https://validador-de-bandeiras-de-cartao-git-8123e0-talyolivs-projects.vercel.app/)
