import React, { useContext, useState } from "react";
import "./HomePage.css";
import logoLight from "../../images/curso-template-v2.png";

import logoDark from "../../images/curso-template.png";
import ModeContext from "../context/ModeContext";
import { mintarCertificado } from '../contratos/mintarCertificado2';
const VideoWithNotes = ({ videoTitle, notes }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="video">
      <button onClick={handleModal}>Resumo</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{videoTitle}</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{notes}</p>
          </div>
        </div>
      )}
    </div>
  );
};
const HomePageOwner = () => {
  const { mode } = useContext(ModeContext);
  const logo = mode === "Light" ? logoLight : logoDark;

  const videoNotes = {
    "Aula 1 - Blockchain Básico":
      "Blockchain é uma tecnologia de registro distribuído que armazena dados em blocos interligados de forma cronológica e imutável.\nCada bloco contém um conjunto de transações validadas e é vinculado ao bloco anterior através de um mecanismo de criptografia.\nEsta tecnologia é a espinha dorsal das criptomoedas, permitindo transações seguras e descentralizadas sem a necessidade de intermediários. \n\nCriptomoeda: Uma criptomoeda é uma forma de moeda digital que utiliza criptografia para garantir transações seguras e controlar a criação de novas unidades.\n Elas operam em uma rede descentralizada baseada em blockchain, permitindo transferências diretas de valor entre os participantes sem a necessidade de uma autoridade central.\n\nHash: Um hash é uma função matemática que transforma uma entrada de dados em uma string de comprimento fixo.\nO resultado, chamado de hash, é único para cada conjunto de dados de entrada e é praticamente impossível de reverter.\nNa blockchain, hashes são amplamente utilizados para garantir a integridade dos dados e para tornar as transações seguras.",
    "Aula 2 - Javascript Básico":
      "O motor V8 é um mecanismo de execução de código JavaScript criado pela Google.\nEle foi projetado para ser rápido e eficiente, e é usado em navegadores como o Google Chrome e o Opera.\n\nO V8 compila o código JavaScript em código de máquina nativo antes de executá-lo, o que ajuda a melhorar o desempenho e a velocidade de execução das aplicações web.\nQuando se trata de JavaScript e a Web 2.0, o motor V8 desempenhou um papel crucial no impulsionamento da experiência do usuário na web.\nEle permitiu que aplicativos web se tornassem mais dinâmicos e responsivos, possibilitando a criação de interfaces interativas e fluidas.\nCom o V8, os desenvolvedores podem criar aplicações web mais sofisticadas e ricas em recursos, contribuindo assim para a evolução da web para a sua segunda fase, conhecida como Web 2.0.\n\nA Web 2.0 é uma fase da evolução da internet que se caracteriza pelo surgimento de tecnologias e padrões que permitiram uma internet mais colaborativa, interativa e centrada no usuário.\nIsso incluiu o desenvolvimento de aplicativos web mais dinâmicos e responsivos, como redes sociais, wikis, blogs, entre outros.\nO motor V8 desempenhou um papel fundamental nessa evolução, ao fornecer uma base sólida para a execução eficiente de código JavaScript, que é a linguagem de programação predominante na web.",
    "Aula 3 - Criptografia Básica":
      "Hashing: Foi abordado o processo de hashing, fundamental na criptografia, discutindo algoritmos como RIPEMD-160, SHA256, Keccak256, BLAKE2b e SHAKE3, destacando suas características e aplicações em segurança de dados e blockchain.\n\nCriptografia Assimétrica: Foi apresentada a criptografia assimétrica, que utiliza pares de chaves pública e privada.\nForam exploradas curvas elípticas como ECDSA (sec256k1), EdDSA (curve25519) e Schnorr (ristretto25519), discutindo seus esquemas de assinatura digital e aplicações em blockchains.\n\nZKP (Zero-Knowledge Proofs): Os participantes foram introduzidos às provas de conhecimento zero, permitindo que uma parte prove posse de uma informação sem revelar os detalhes.\nForam exploradas técnicas como Zk-SNARKs, ZK-STARKs, PLONK e BulletProofs, destacando seu papel na garantia de privacidade e integridade em sistemas de blockchain.",
    "Aula 4 - Bibliotecas Cripto":
      "Bibliotecas Cripto: Foram apresentadas bibliotecas como Web3js e Ethersjs, fundamentais para interagir com a blockchain Ethereum, enquanto a Viem é uma biblioteca específica para o desenvolvimento e teste de contratos inteligentes.\n\nFront-end: Ferramentas como Wagmi e RanbowKit foram destacadas para o desenvolvimento de interfaces de usuário otimizadas para aplicações blockchain, garantindo uma experiência de usuário atraente e funcional.\n\nSmartcontracts: Frameworks como Brownie, Truffle e Hardhat oferecem suporte abrangente para desenvolvimento, teste e implantação de contratos inteligentes na blockchain Ethereum.\nAlém disso, foram mencionadas ferramentas como Merkly, MythX/Mithril e Sliter para garantir a segurança e robustez do código.",
    "Aula 5 - Solidity Básico":
      "Compilação e Gerenciamento de Pacotes:\n\n    Utilização do Solc para compilar código Solidity em bytecode EVM.\n    Introdução ao Package Manager (Forge) para simplificar o desenvolvimento.\n\nFundamentos da Linguagem:\n\n    Demonstração do 'Hello World' para iniciar o entendimento da linguagem.\n\nTipos de Dados e Operadores:\n\n    Exploração dos tipos de dados essenciais como uint, int, bool, address, string e bytes.\n    Discussão sobre operadores aritméticos, de atribuição, de comparação e lógicos.\n\nArmazenamento e Manipulação de Dados:\n\n    Conceitos de memória, armazenamento e calldata, incluindo arrays, structs e mappings.\n\nControle de Fluxo e Funções:\n\n    Utilização de estruturas de controle como if, else, for e while.\n    Definição de funções com diferentes visibilidades e modificadores.\n\nRecursos Extras:\n\n    Abordagem de temas adicionais como tratamento de erros, eventos, modificadores de função, importação de bibliotecas externas e tipos de dados nativos.\n\nExemplo de Contrato (Flipper):\n\n    Implementação prática com um contrato simples para consolidar os conceitos aprendidos.",
    "Aula 6 - Foundry e EVM":
      "Na sexta aula do Bootcamp Blockchain Optimism da NearX, foi explorado diversos aspectos cruciais do ecossistema blockchain, destacando as propostas de melhoria Ethereum (EIPs) e algumas das principais blockchains baseadas na Ethereum Virtual Machine (EVM).\n\nNo que diz respeito aos EIPs, foram abordados os padrões ERC-20, ERC-721 e ERC-1155, essenciais para tokens fungíveis, não fungíveis e híbridos, respectivamente. Além disso, a proposta EIP-1559 foi discutida, visando melhorar a experiência do usuário e a eficiência da rede Ethereum ao alterar o modelo de definição das taxas de transação. Outras propostas relevantes incluíram o EIP-2535, que aborda vulnerabilidades de segurança, como ataques de reentrada, e o EIP-3675, relacionado à migração para Ethereum 2.0. O padrão Diamond Standard (EIP-4337) também foi mencionado como uma solução para contratos modulares e escaláveis.\n\nAlém disso, foram exploradas diversas blockchains baseadas na EVM, cada uma com suas características únicas de escalabilidade, privacidade e interoperabilidade. Isso incluiu plataformas como DREX, Polygon, Optimism, Binance Smart Chain, Avalanche, Fantom, Harmony, Arbitrum, Moonbeam e Acala, todas oferecendo soluções para diferentes necessidades dentro do ecossistema blockchain.\n\nPara complementar a compreensão teórica, foi realizada uma implementação prática de um contrato simples denominado 'Counter', permitindo a aplicação dos conceitos aprendidos em contratos inteligentes\n",
    "Aula 7 - ERC20":
      "No sétimo dia do Bootcamp Blockchain Optimism da NearX foi focado no ERC20. Começamos com um breve resumo dos métodos do ERC20, diretamente do site oficial, proporcionando uma compreensão clara das funcionalidades padrão desses tokens.\n\nEm seguida avançamos para uma atividade prática escrevendo um contrato ERC20 chamado 'token'. Esse contrato foi implementado com funcionalidades essenciais, como balanceOf, transfer, approve, transferFrom, juntamente com os eventos Transfer e Approval. Para garantir a segurança, foram utilizados alguns conceitos do OpenZeppelin, uma biblioteca amplamente reconhecida por suas práticas de segurança em contratos inteligentes.\n\nAlém disso, tivemos a oportunidade de realizar o deploy local do contrato para realizar testes e garantir que tudo funcionasse conforme o esperado. Essa abordagem prática nos permitiu que aplicar os conhecimentos teóricos adquiridos anteriormente em um contexto real, fortalecendo compreensão sobre a implementação de contratos ERC20 e a importância da segurança na blockchain.\n",
    "Aula 8 - ERC721":
      "Na oitava aula do Bootcamp Blockchain Optimism da NearX, mergulhamos no mundo dos ERC721 Tokens, com foco em tokens não fungíveis (NFTs). Tivemos uma apresentação gráfica destacando as diferenças entre ERC20 e ERC721. Enquanto ERC20 é usado para tokens fungíveis, o ERC721 é aplicado em tokens não fungíveis, onde cada token possui um valor único e indivisível.\n\nDurante a parte teórica, foi explorado os processos de backend e frontend para interação com contratos ERC20 e ERC721, destacando a implementação do IPFS como retorno para o usuário em ERC721. Além disso, foi discutida a diferença entre fungível e não fungível, essencial para entender o conceito por trás dos NFTs.\n\nAo fim da aula, foi implementado um contrato ERC721 completo, incorporando todos os conceitos essenciais, como ERC165, juntamente com seus eventos e funções. Essa abordagem prática permitiu entender os conhecimentos teóricos na implementação real de contratos ERC721, solidificando assim a compreensão sobre o assunto.\n",
    "Aula 9 - Segurança 101 Felipe":
      "Nesta aula o foco foi na segurança da blockchain. A apresentação começou destacando a importância da segurança ao revelar estatísticas alarmantes de fundos perdidos devido a ataques de hackers, bugs e outros eventos.\n\nForam abordados diferentes tipos de vulnerabilidades, categorizadas como High/Critical (Crítico), Medium (Médio) e Low/Informational (Baixo/Informativo). Estas refletem o nível de risco e a facilidade de execução de ataques, desde roubos de fundos até questões de otimização de gás.\n\nDiversos vetores de ataques foram apresentados, incluindo Phishing, Flash Loan Attack, Rugpull, Oracle Issue, Access Control, Reentrancy, Logic Error, Front Running e DOS. Cada um desses representa uma ameaça potencial à segurança da blockchain.\n\nPara garantir uma segurança robusta, foram compartilhadas boas práticas, como a metodologia CEI (Check, Effects, Interaction), a identificação de atores externos e a revisão constante por meio de Dev/Test/Revisão. Recomendou-se o uso de bibliotecas confiáveis, como OpenZeppelin e Vectorized, e enfatizou-se a importância da descentralização e transparência, sugerindo que proprietários sejam uma Multisig para reduzir o risco de Rug Pull.\n\nOutras recomendações incluíram a utilização de analisadores estáticos de vulnerabilidade, como Slither, e ferramentas de teste de fuzzing, como Echidna/Foundry/Medusa. Foi destacada a plataforma solodit.xyz/ para verificar vulnerabilidades em projetos existentes.\n\nA aula concluiu com dois exemplos práticos: a explicação do funcionamento e prevenção de um ataque Reentrancy e a demonstração de uma vulnerabilidade em boas práticas, mostrando um código com uma função burn sem um modifier para restringir o acesso a pessoas autorizadas.\n",
    "Aula 10 - Layer 1/Layer2 + Optimism":
      "Na décima aula do Bootcamp Blockchain Optimism da NearX, foram discutidas as diferentes camadas (layers) do blockchain:\n\nLayer 0: Envolve frameworks como Truffle, Hardhat e Forge, que moldam a forma como trabalhamos com blockchain.\n\nLayer 1: Refere-se às aplicações escritas, como DyDx, Polkadot e Ethereum, que são construídas sobre a infraestrutura básica do blockchain.\n\nLayer 2: Representa um superset, incluindo soluções como Optimism, Polygon e Arbitrum, que são projetadas para melhorar a escalabilidade e o desempenho das aplicações blockchain.\n\nAlém disso, foi apresentado um gráfico demonstrando a integração entre essas camadas e o conceito de funcionamento dos Rollups, utilizando o Optimism como exemplo. A aula também incluiu um momento prático, onde foi realizado o deploy de um contrato ERC20 na plataforma Optimism.\n",
    "Aula 11 - Definição do Projeto":
      "Na aula 11   de hoje foi apresentado a Definição de Projeto para o hackathon \nPra começar tivemos uma revisão da ultima aula e como foi realizada a distribuição do token.\n\nMontando a Equipe Ideal:\nReúna pessoas com diferentes habilidades e perspectivas para criar soluções mais completas.\nLimite de 4 participantes\n\nDefinindo o Tamanho do Projeto:\nComece com metas específicas e realistas para o projeto.\nAvalie o tempo e habilidades da equipe disponíveis.\n\nAprendendo com Hackathons:\nExamine os projetos vencedores de hackathons anteriores para entender o nível de maturidade e as características de sucesso.\nVeja as regras do hackathon e os tópico válidos.\n\nDominando a Definition of Done:\nDefina claramente os critérios que seu projeto ou tarefa precise atender para ser considerado finalizado.\n\nDesbloqueando o Figma:\nFoi apresentada a interface amigável do Figma para criar designs de forma rápida e eficiente com colaboração em Tempo Real com sua equipe\n\nDomine os Wireframes:\nPrototipagem Rápida: Crie esboços simples e rápidos da interface do seu projeto.\nPriorize a organização e o layout dos elementos na tela.\nAlém do Figma, foi indicado Miro, MS Whiteboad, Apple Freeform, Sketch e até PowerPoint\n\nChatGPT como Aliado:\nFaça perguntas para obter informações e aprender sobre diversos tópicos.\nPara a geração de conteúdo eficaz é necessário criar e ajustar o prompt a sua necessidade com o máximo de detalhes.\n\nDesvendando o Brainstorm e SCAMPER:\nBrainstorm:\nReúna a equipe para gerar um grande número de ideias sem críticas.\nExplore diferentes perspectivas e soluções inovadoras.\nCombine as melhores ideias e refine-as para criar soluções viáveis.\nSCAMPER:\nUtilize a técnica SCAMPER para modificar e aprimorar ideias existentes.\nSete Operadores: Aplique os sete operadores SCAMPER (Substituir, Combinar, Adaptar, Modificar, Pôr em outro uso, Eliminar, Reorganizar) para gerar novas ideias.\n",
    "Aula 12 - Criação do Roadmap":
      "Na aula 12 de hoje, foi apresentado  a criação do Roadmap \n\nO que é MVP na prática.\n\nDefinição: Minimal Viable Product (Produto mínimo de viabilidade) se refere a versão mais básica do seu projeto, com funcionalidades essenciais para atender às necessidades dos usuários.\n\nReferência:\nStartup enxuta\nA única coisa\n\nExemplo de quebra de um projeto em tarefas menores com a conversão de biblioteca Python para Rust.\n\nSessão de dúvidas\n\nComo usar o GitHub \nO GitHub é uma plataforma online para gerenciar seus projetos de código-fonte possui funções similares a redes sociais.\n\nRepositório: Crie um repositório para armazenar o código do seu projeto e controlar as diferentes versões.\n\nMilestones: Organize as etapas do seu projeto em marcos para acompanhar o progresso e garantir entregas dentro do prazo.\nExemplo pagina de interação com usuários com data de entrega.\n\nIssues: Utilize issues para registrar bugs, sugestões de melhorias e tarefas pendentes.\nExemplo: Crie o issue dentro do milestone, defina responsável, descrição, inclua diagrama/wireframe\n\nPR ou Pull Requests: Facilite a colaboração na equipe revisando e aprovando alterações no código\n\n\nPor fim foi brevemente apresentado um resumo do template a ser usado no hackathon, o detalhamento será realizado na aula 13.\n\nSessão de dúvidas\n\nLink do template recomendado foi disponibilizado aqui no Discord.\n",
    "Aula 13 - Codando":
      "Na aula 13 de Coding tivemos muito conteúdo onde foi apresentado: Codando o SmarContract com Fullstack Web3 Template\n\nUsando o template\n \nClone template\nAcesse sua conta no GitHub\nAcesse  o template fornecido #linksúteis\nCrie um fork da branch main defina seu repositório e descrição\nEfetue o clone para sua máquina\n\n\nPara efetuar o clone é preciso ter o Git instalado em sua máquina. Git-scm, \nRecomendado se aprofundar no Git, pois é amplamente utilizado nos projetos atuais\n\nNa sua máquina local \nSerá necessário 5 ferramentas \nEditor de Código. Ex. Visual Studio Code\nDocker Recomendado se aprofundar em Docker.\nNode.js\nPython\nFoundry\n\nO Docker cria containers leves e portáteis que encapsulam tudo que você precisa para executar sua aplicação: código, bibliotecas, ferramentas e configurações.\nEle será utilizado no framework para três conteineres:\nAnvil: executará sua blockchain local\nDeploy: carregará seus contratos para dentro de sua blockchain\nFrontEnd : executará sua interface Web, padrão porta 3000\n\nFrontEnd\nO FrontEnd contém algumas das funções mais utilizadas\nInstale as dependências: yarn\nExecute o servidor: yarn dev\n\nA interface tem três módulos prontos: debug (contrato), explorer (visualizar transações), exemple Ui ( interface exemplo que pode ser adaptada ou substituída)\n\nContrato\nPara interagir com contrato na blockchain as seguintes informações são requeridas: endereço , abi (interface do contrato) e provider \nBaseSetup e Deploy de Test foram apresentados\n\nNotas:\nPara receber a moeda local do anvil, use o faucet\nAo Reiniciar anvil se lembre de reiniciar o Metamask nounce\n\nFramework\nFoi apresentado as vantagens de seu uso, como na alteração com a automação de diversas atividades repetitivas \n\nDocker Desktop\nFoi apresentada a instalação do Docker \nO processo de carga do docker será abordado na próxima aula.\n",
    "Aula 14 - Codando":
      "Na aula 14 de Coding tivemos muitas emoções onde foi apresentado: Codando o FrontEnd\n\nInteragindo com o contrato\n\nComeçamos imaginando como seria a ver a tela de quem apresenta, depois de muita emoção, começamos a ver a tela do Lucas. 😆\n\nPara a interação com o contrato foi apresentado o uso do ReactJS integrada ao Ethers. Começando com a edição do src/App.js.\n\nÉ necessário instalar a biblioteca do ethers, foi recomendado o uso do yarn invés do npm. \n\nFoi apresentado a estrutura básica DOM (Document Object Model), que trata a estruturas em documentos HTML ou XML como uma árvore de objetos.\nOs principais elementos da árvore DOM são: \nraiz\nelemento Ex:  <div>, <h1>, <p>\ntexto - texto dentro dos elementos\natributo - atributos dos elementos\n\nPassamos então para conexão com a carteira Metamask.\nA página precisa incluir a biblioteca ethers para permitir a interação entre a blockchain e o Metamask.\n\nFoi então apresentado falhas e como solicitar o auxilio do chatGPT para gerar o código e potenciais correções.\nFoi identificado que a biblioteca estava instalada em um local incorreto.\n\nNo uso do Chat GPT:\nForneça o máximo de detalhes possível sobre o problema que você está enfrentando.\nInclua o código relevante, incluindo a linguagem de programação e a versão.\nDescreva o que você espera que o ChatGPT faça para te ajudar\n\nPassamos para a revisão das ações no código frente a documentação do ethers.\n\nFoi então exibido como identificar a assinatura de uma função, sempre com 32 bytes por slot.\nA assinatura é utilizada para interação direta com um contrato e suas funções. \n\nVimos um exemplo na etherscan e suas assinaturas\n\nVoltamos ao FrontEnd, incluindo uma função de incrementar número, tivemos várias falhas durante a aula com correções, como o tempo da aula é curto encerramos sem toda correção, o código com as correções será adicionado no github.\n",
    "Aula 15 - Pitch":
      "Na aula 15 foi apresentado: Pitch\n\nComeçamos com os avisos!!!\nInscrições para o Hackathon vão até Domingo!\nÚltima semana de venda do acesso vitalicio na NearX. NÃO PERCA!\n\nPitch \nUm Pitch é uma apresentação curta e direta, geralmente feita para convencer investidores, parceiros, clientes ou empregadores sobre uma ideia, produto, serviço ou projeto. O objetivo principal é despertar o interesse do público e fazer com que eles queiram saber mais.\n\nPara a gravação é recomendado o uso do loom(ponto)com\nGratuito para vídeos de até 5 minutos\nO video final deve ser incluído no loom\nO link para o vídeo deve ser incluído no README do seu repositório\n\nMuita atenção ao Audio, ele deve estar claro e com boa qualidade em sua apresentação\n\nExemplos de vídeos gravados com o loom pelo Lucas\nCurvas ECDSA\nSiwe\n\nDicas Tiktoker: Dicas para gravação de vídeo\nComece com apresentações simples, fale um pouco sobre você, por exemplo:\nseu nome\nsua idade\nsua cidade\nestilo de musical\n\nFaça um Roteiro\nQue sou\nSua equipe\nSobre o projeto\n\nClaro e objetivo: A mensagem do pitch deve ser clara e fácil de entender.\nIdentifique o problema: Qual problema o seu produto ou serviço resolve?\nDestaque a solução: Como o seu produto ou serviço resolve o problema?\n\nPara quem quiser usar apresentações, pode ser utilizado \nFigma\nCanvas\nOutro que tenha familiaridade\n\nForam revisadas Dúvidas\nOnde foi esclarecido entre outras coisas que no Pitch:\nPode ser criado em equipe ou diferentes membros\nPode ser usado IA e avatares\nPode usar outras ferramentas que conhece como CAPCut etc\n\nAvisos finais\nQuiz será liberado na Segunda Feira, acerto de 80%\n\nAtualizações serão disponibilizados no Discord\n\nProjetos e  boas ideias de Hackathon podem virar grandes negócios, o Twitter, hoje X, teve sua origem na Odeo usando o modelo de desenvolvimento de Hackathon!\n",

    // Adicione anotações para outros vídeos aqui
  };

  // Estados para controlar se cada vídeo foi marcado como assistido
  const [videosChecked, setVideosChecked] = useState({
    video1: false,
    video2: false,
    video3: false,
    video4: false,
    video5: false,
    video6: false,
    video7: false,
    video8: false,
    video9: false,
    video10: false,
    video11: false,
    video12: false,
    video13: false,
    video14: false,
    video15: false,
  });

  // Função para alternar o estado de marcação do vídeo
  const handleCheckVideo = (video) => {
    setVideosChecked({
      ...videosChecked,
      [video]: !videosChecked[video],
    });
  };

  // Verifica se todos os vídeos foram marcados como assistidos
  const allVideosChecked = Object.values(videosChecked).every(
    (isChecked) => isChecked
  );

  return (
    <>
      <div className={`total ${mode}`}>
        <div className={`titulo ${mode}`}>
          <img src={logo} alt="logo" className="symbol" />
          <div className="texto1">Conteudos Blockchain Optimism!</div>
          <div className="texto2">
            Verifique abaixo os vídeos e gere o{" "}
            <b>certificado de aprendizado ao final da página!</b>
          </div>
        </div>

        <div className="videos">
          <h1>Aula 1 - Blockchain Básico</h1>
          <div className="video">
            <iframe
              width="700"
              height="300"
              src="https://www.youtube.com/embed/yModQgXgCdI"
              title="Aula 1 - Blockchain Básico (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 1 - Blockchain Básico"
                notes={videoNotes["Aula 1 - Blockchain Básico"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video1 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video1")}
              ></button>
            </div>
          </div>

          <h1>Aula 2 - JavaScript Básico</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/p2MnBva1g58"
              title="Aula 2 - Javascript Básico (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 2 - JavaScript Básico"
                notes={videoNotes["Aula 2 - Javascript Básico"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video2 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video2")}
              ></button>
            </div>
          </div>
          <h1>Aula 3 - Criptografia Básica</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/xoAwwe6uODk"
              title="Aula 3 - Criptografia (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
           <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 3 - Criptografia Básica"
                notes={videoNotes["Aula 3 - Criptografia Básica"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video3 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video3")}
              ></button>
            </div>
          </div>
          <h1>Aula 4 - Bibliotecas Cripto</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/WH_GPLiPJ78"
              title="Aula 4 - Bibliotecas Cripto (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 4 - Bibliotecas Cripto"
                notes={videoNotes["Aula 4 - Bibliotecas Cripto"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video4 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video4")}
              ></button>
            </div>
          </div>
          <h1>Aula 5 - Solidity Básico</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/PCqhzFVqjAU"
              title="Aula 5 - Solidity Básico (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 5 - Solidity Básico"
                notes={videoNotes["Aula 5 - Solidity Básico"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video5 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video5")}
              ></button>
            </div>
          </div>
          <h1>Aula 6 - Foundry e EVM</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/8PcPPJb443I"
              title="Aula 6 - Foundry + EVM (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
             <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 6 - Foundry e EVM"
                notes={videoNotes["Aula 6 - Foundry e EVM"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video6 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video6")}
              ></button>
            </div>
          </div>
          <h1>Aula 7 - ERC20</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/6diK9i6eNqw"
              title="Aula 7 - ERC20 (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 7 - ERC20"
                notes={videoNotes["Aula 7 - ERC20"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video7 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video7")}
              ></button>
            </div>
          </div>
          <h1>Aula 8 - ERC721</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/5GqoVF4jicE"
              title="Aula 8 - ERC721 (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
           <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 8 - ERC721"
                notes={videoNotes["Aula 8 - ERC721"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video8 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video8")}
              ></button>
            </div>
          </div>
          <h1>Aula 9 - Segurança 101 (Felipe)</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/M2MWY9JlXY0"
              title="Aula 9 - Segurança 101 (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
           <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 9 - Segurança 101 (Felipe)"
                notes={videoNotes["Aula 9 - Segurança 101 Felipe"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video9 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video9")}
              ></button>
            </div>
          </div>
          <h1>Aula 10 - Layer 1/Layer2 + Optimism</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/Y6hVhsP8Nc0"
              title="Aula 10 - L1/L2 + Optimism (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 10 - Layer 1/Layer2 + Optimism"
                notes={videoNotes["Aula 10 - Layer 1/Layer2 + Optimism"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video10 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video10")}
              ></button>
            </div>
          </div>
          <h1>Aula 11 - Definição do Projeto</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/5IdE67XXP_o"
              title="Aula 11 - Definição de Projeto (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 11 - Definição do Projeto"
                notes={videoNotes["Aula 11 - Definição do Projeto"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video11 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video11")}
              ></button>
            </div>
          </div>
          <h1>Aula 12 - Criação do Roadmap</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/DyQoP3yewos"
              title="Aula 12 - Criação do Roadmap (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
           <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 12 - Criação do Roadmap"
                notes={videoNotes["Aula 12 - Criação do Roadmap"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video12 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video12")}
              ></button>
            </div>
          </div>
          <h1>Aula 13 - Codando</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/o3G0YTyilSo"
              title="Aula 13 - Coding (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
             <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 13 - Codando"
                notes={videoNotes["Aula 13 - Codando"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video13 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video13")}
              ></button>
            </div>
          </div>
          <h1>Aula 14 - Codando</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/iXgDydY_-M0"
              title="Aula 14 - Conding (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 14 - Codando"
                notes={videoNotes["Aula 14 - Codando"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video14 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video14")}
              ></button>
            </div>
          </div>
          <h1>Aula 15 - Pitch</h1>
          <div className="video">
            <iframe
              width="700"
              height="380"
              src="https://www.youtube.com/embed/LVzrqSJvCog"
              title="Aula 15 - Pitch (BootCamp Optimism x NearX)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
           <div className="videoContents">
              <VideoWithNotes
                videoTitle="Aula 15 - Pitch"
                notes={videoNotes["Aula 15 - Pitch"]}
              />
              <p>Assistido:</p>
              <button
                className={`check-button ${
                  videosChecked.video15 ? "checked" : "unchecked"
                }`}
                onClick={() => handleCheckVideo("video15")}
              ></button>
            </div>
          </div>

          <br />
          <br />
          <button className="certificado" disabled={!allVideosChecked} onClick={mintarCertificado}>Emitir Certificado</button>
        </div>
      </div>
    </>
  );
};

export default HomePageOwner;
