# NPM   

Node Package Manager

_Glossary: Dependencies, Packages, Modules_
(Vamos pegar e colocar coisas que outras pessoas criaram para que  o nodejs tenha mais funcionalidades além das que vem )

- [ ] Verificar se temos o npm 
- [ ] Criar o nosso próprio pacote
  ##  Maneiras de criar:
    1.**npm init + enter em tudo**

    2. **npm init -y** (o y é praticamente dizer sim para tudo)

- [ ] O que é o arquivo package.json:
### Arquivo no formato de javscript obcjet 

- [ ] utilizar modulos de terceiros
1.**npm install cfonts** (irá buscar na biblioteca do npm o modulo)

2. **npm i cfonts (também instala)**


- [ ] O que é diretório node_modules
    ## É onde será puxado todas as dependencias de um devido modulo

    **Sempre bom também ignorar o node_modules(a  pasta), com um arquivo gitignore**

    # Quando ja ce sabe as dependencias do package, basta apenas dar um **npm install**, que baixara as que são necessarias 

- [] O que é o arquivo package-lock.json? 
# Ele serve para fazer um mapeamento, uma "manutenção" de todas as dependencias do projeto

- [ ] Criar scripts para rodar com o npm:  
Usaremos a package.json, e no prompt colocaremos: 
**npm run test**
Ouuuuu
**npm run start**(start é um comando especial)



### Aprendendo a instalar um pacote de maneira global
- [ ] Instalar pacote de maneira global ( para todos os projetos, n somente para um): 

###
**npm install opn -g** (esse -g é a opção que demarca que é para instalar de maneira global e o opn é o nome do pacote)

##
Para saber onde esta instalado o node_module global:
**npm root -g**

## 
Para desinstalar um module global:
**npm uninstall opn -g**


