export function addUser(el, container) {
    container.innerHTML +=                 `      
                <div class="card">
                    <div class="mac-header">
                        <span class="red"></span>
                        <span class="yellow"></span>
                        <span class="green"></span>
                    </div>
                    <p class="card-title">Usuário encontrado: <span class="span-nome">${el.nome}</span></p>

                    <div class="code-editor">
                        <pre><code>&lt;data id="email"&gt; ${el.email} &lt;/data&gt;</code></pre>
                        <pre><code>&lt;data id="salario"&gt; ${el.salario} &lt;/data&gt;</code></pre>
                        <pre><code>&lt;data id="estado"&gt; ${el.estado} &lt;/data&gt;</code></pre>
                        <pre><code>&lt;data id="empresa"&gt; ${el.empresa} &lt;/data&gt;</code></pre>
                        <pre><code>&lt;data id="idade"&gt; ${el.idade} &lt;/data&gt;</code></pre>
                        <pre><code>&lt;data id="cpf"&gt; ${el.cpf} &lt;/data&gt;</code></pre>
                    </div>
                </div>
            `;
}