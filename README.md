# TriagemApp

<br />

### 1. Apresentação

Quando um paciente chega ao hospital, independente do seu estado, é obrigado a aguardar
um processo burocrático e moroso.
Esse processo, deve-se ao longo tempo de interação e resposta entre o convênio e o hospital.
Somente após a liberação do convênio, o paciente pode ser liberado para uma nova fila, onde
passará por uma triagem.
Após a triagem, será classificado seu estado como grave ou não. Então, será submetido a uma
nova fila de espera por atendimento com um médico clínico ou especialista.
Como solução para esse processo, foi desenvolvido um aplicativo que fará a interação do
usuário/paciente, convênio médico e Hospital.

<br />

### 2. Especificação Funcional

O Usuário poderá efetuar login, Iniciar o atendimento, Agendar e editar consultas,Visualizar históricos e solicitar senha direto para o Pronto Socorro.
O Médico/ADM poderá efetuar login e Descrever Plantão.

![image](https://user-images.githubusercontent.com/69824123/120929841-08967d00-c6c1-11eb-9b23-c0b01348f9eb.png)


Usuários:
-	Paciente;
-	Médico/ADM;

<br />

#### Principais Funcionalidades:
- [x] Logar;
- [x]	Descrição e controle de plantão;
- [x]	Iniciar atendimento (Processo de Triagem);
- [x]	Agendar consultas;
- [x]	Editar agendamentos;
- [x]	Visualizar histórico de consultas;
- [x]	Visualizar histórico de prontuários;
- [x]	Pronto Socorro (solicitação de senha imediata).



#### Funcionalidade por Perfil de acesso:
![2](https://user-images.githubusercontent.com/69824123/120930066-18629100-c6c2-11eb-9f12-8cd766ec3961.png)

 
 

#### Regras do Negócio

Quando um paciente entra no hospital, é submetido a um processo de triagem, onde recebe uma senha e aguarda ser chamado para preenchimento e solicitação de tratamento ao convênio.
Após resposta do convênio, o paciente assina os documentos e então aguarda o processo de triagem.
Nesse processo, são efetuadas perguntas chaves e que seguem um padrão, para então iniciar o tratamento na especialidade escolhida, que pode ser pronto Socorro, Ortopedista, pediatra, entre outros.
A proposta do aplicativo Triagem, visa facilitar o processo descrito acima, proporcionando ao paciente/responsável a possibilidade de solicitar o atendimento ao convênio e responder as perguntas referentes a triagem pelo aplicativo.
Após o processo, receberá uma senha numérica com um QRCode e ao chegar no hospital, irá direto ao tratamento necessário.
Além do processo de Triagem, o paciente/responsável poderá realizar agendamento de consultas e alterá-lo de forma fácil, se necessário.

Visando atender também casos em que o paciente não terá um responsável/acompanhante para o auxiliar em casos críticos, como: lesões graves, fraturas, entre outros, o aplicativo disponibilizará um botão de emergência como o nome “Pronto Socorro”, que ao ser clicado, criará imediatamente uma senha para que o paciente apresente ao hospital.

O Triagem App, disponibilizará uma versão mais administrativa para controle do Hospital, onde o Médico descreverá o plantão, deixando registrado as informações para o próximo médico que dará sequência ao trabalho.

<br />

### 3. Projeto e Tecnologia Envolvida


#### Firebase Paciente:
 

 ![image](https://user-images.githubusercontent.com/69824123/120930109-565fb500-c6c2-11eb-96da-1d8d60d71698.png)


 ![image](https://user-images.githubusercontent.com/69824123/120930135-75f6dd80-c6c2-11eb-9fcd-1f9f35d5aaba.png)



#### Firebase Médico/ADM:


![image](https://user-images.githubusercontent.com/69824123/120930191-ad658a00-c6c2-11eb-9ac2-05075d68c9d4.png)



#### Monaca: 


![image](https://user-images.githubusercontent.com/69824123/120930202-b6565b80-c6c2-11eb-986d-a720ebe390f5.png)

<br />
Github: https://github.com/TriagemApp

<br /><br />


### 4. Resultados



#### Login e Tela Inicial
 

![image](https://user-images.githubusercontent.com/69824123/120930215-beae9680-c6c2-11eb-9f4c-b62a9c79bfb2.png)



#### Iniciar atendimento
 
![image](https://user-images.githubusercontent.com/69824123/120930228-c66e3b00-c6c2-11eb-8a0d-71a374a92896.png)


#### Agendar Consulta
 
 
![image](https://user-images.githubusercontent.com/69824123/120930235-cd954900-c6c2-11eb-853a-3358b48c9a84.png)




#### Pronto Socorro

![image](https://user-images.githubusercontent.com/69824123/120930247-d71eb100-c6c2-11eb-958f-0d10e78d9598.png)

 

#### Histórico de Agendamentos e Prontuários

![image](https://user-images.githubusercontent.com/69824123/120930257-e140af80-c6c2-11eb-94f5-7d3182d5e4d2.png)



#### Módulo do Médico

![image](https://user-images.githubusercontent.com/69824123/120930316-21a02d80-c6c3-11eb-8b60-69af2afa6e8b.png)

<br />

### 5 - Referências
- Para o desenvolvimento da tela do Médico : https://www.youtube.com/watch?v=itNsRn1kjLU&t=864s<br />
- Para utilização do Monaca: https://docs.monaca.io/en/tutorials/<br />
- Para a utilização do Firebase:<br />
- https://firebase.google.com/?gclid=Cj0KCQjw5PGFBhC2ARIsAIFIMNeQ8v4Tqo04DRkQHxpdmvcLs7qqeq9DufueaF5fIq434jpg1PYZNL8aAmXEEALw_wcB&gclsrc=aw.ds

