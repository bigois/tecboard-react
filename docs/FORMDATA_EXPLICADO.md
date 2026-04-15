# FormData e data - Explicação

## O que está acontecendo no código:

```javascript
const handleForm = (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);  // ← O que é isso?
    const data = Object.fromEntries(formData);    // ← E isso?
    console.log(data);
};
```

---

## 1. **FormData** - O quê é?

`FormData` é uma **API nativa do JavaScript** que captura automaticamente **todos os valores de um formulário HTML**.

### Como funciona:

```javascript
const formData = new FormData(event.target);
// event.target = o formulário (<form>)
// FormData percorre todos os campos com 'name' e coleta seus valores
```

### Exemplo prático:
Se você tem um formulário assim:
```html
<form>
  <input name="name" value="Summer Dev Hits" />
  <input name="url" value="https://example.com" />
  <input name="date" value="2024-04-14" />
  <select name="theme">
    <option value="1">JavaScript</option>
  </select>
</form>
```

O `FormData` captura:
```javascript
FormData {
  name → "Summer Dev Hits"
  url → "https://example.com"
  date → "2024-04-14"
  theme → "1"  // ← O SELECT AGORA APARECE!
}
```

---

## 2. **Object.fromEntries()** - O quê faz?

Converte `FormData` (um objeto especial) em um **objeto JavaScript normal** que é mais fácil de trabalhar.

### Transformação:

```javascript
// ANTES (FormData - objeto especial):
FormData {
  name: "Summer Dev Hits",
  url: "https://example.com",
  date: "2024-04-14",
  theme: "1"
}

// DEPOIS (objeto normal via Object.fromEntries):
const data = {
  name: "Summer Dev Hits",
  url: "https://example.com",
  date: "2024-04-14",
  theme: "1"
}
```

---

## 3. **data** - O resultado final

```javascript
const data = Object.fromEntries(formData);
console.log(data);  // Isso imprime:
// {
//   name: "Summer Dev Hits",
//   url: "https://example.com",
//   date: "2024-04-14",
//   theme: "1"
// }
```

Agora você pode:
- ✅ Enviar `data` para uma API: `fetch('/eventos', { method: 'POST', body: JSON.stringify(data) })`
- ✅ Acessar campos específicos: `data.name`, `data.theme`, etc.
- ✅ Validar dados
- ✅ Fazer qualquer processamento que precisar

---

## Por que isso resolve o problema do SELECT?

Antes, você usava `action={handleForm}`, que não capturava corretamente os dados.
Agora, com `onSubmit={handleForm}` + `FormData`, **todos os campos incluindo o select são capturados** porque `FormData` percorre **todos os elementos com atributo `name`**.
