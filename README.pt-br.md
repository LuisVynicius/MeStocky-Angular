# Mestocky

Mestocky é um sistema de gerenciamento de estoque projetado para funcionar localmente, garantindo total controle aos responsáveis pela manutenção do sistema. Ele visa atender qualquer tipo de inventário, oferecendo praticidade, segurança e flexibilidade.

## Login
O primeiro acesso ao sistema será realizado utilizando as credenciais padrão fornecidas na instalação. Após o login inicial, recomenda-se alterar a senha para garantir a segurança.

```
Email: admin@gmail.com
Senha: 123
```
## Cargos
O sistema utiliza níveis de acesso para garantir organização e controle:

- Administrador: Possui controle total do sistema. Apenas um usuário pode ocupar este cargo.
- Gerente: Pode executar quase todas as ações do sistema, exceto remover o administrador.
- Operador: Pode adicionar, remover, editar e visualizar produtos, além de acessar relatórios.
- Visualizador: Limitado à visualização de produtos e relatatórios.

## Páginas

- /login: Tela de autenticação via e-mail e senha.
- /stock: Página principal do estoque. Permite adicionar, editar, remover e visualizar produtos. Também exibe alertas de baixo estoque.
- /admin: Área restrita a Administradores e Gerentes, dedicada à administração geral.
- /profile: Página para alterar informações básicas da conta do usuário logado.
- /report: Página destinada aos relatórios de movimentação e ajustes de quantidade.

## Administração do sistema

Administradores e Gerentes têm acesso à página /admin, onde podem gerenciar:

- Usuários: Adicionar/Remover e Visualizar.
- Categorias de produto: Adicionar/Remover/Visualizar e Editar.
- Motivos para alteração de quantidade de produto: Adicionar/Remover/Visualizar e Editar.

Os motivos de alteração são definidos pelos administradores e utilizados para justificar movimentações no estoque.

### Exemplos

- Motivos:
  - Venda
  - Produto com defeito
  - Reembolso
  - Ajuste

- Categorias:
  - Computadores
  - Frutas
  - Materiais

## Informações sobre a remoção de Motivos e Categorias.
A remoção de Motivos e Categorias depende diretamente das entidades que fazem uso deles. Isso impede que o sistema fique com referências quebradas.

Para remover uma Categoria, é necessário garantir que nenhum produto ainda esteja vinculado a ela. Isso pode ser feito de duas formas:
- Remover os produtos que utilizam aquela categoria; ou
- Editar esses produtos, atribuindo outra categoria antes da remoção.

Para remover um Motivo, também é preciso que ele não esteja associado a nenhum relatório. Existem duas maneiras de liberar o motivo:
- Apagar o produto relacionado, o que também remove todos os relatórios ligados a ele; ou
- Alterar o motivo de cada relatório que ainda utiliza o motivo em questão, até que ele não esteja mais relacionado a nenhum registro.