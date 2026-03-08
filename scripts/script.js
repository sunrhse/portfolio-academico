const sobre = `
<p>Sou desenvolvedora front-end e estudo Análise e Desenvolvimento de Sistemas pela Fatec. Adoro criar interfaces que sejam bonitas e funcionais, gerando aquele equilíbrio entre design e código.
Já trabalhei em projetos acadêmicos que envolveram desde design de telas até implementação de back-end. Meu foco é front-end, mas estou ampliando para back-end também. Já usei Python em projetos da faculdade e atualmente estudo Java e JavaScript.
Nos momentos livres, gosto de ler e descobrir jogos novos.</p>
`;
document.querySelector(".sobre-mim").innerHTML = sobre;

var formacao = [
  {
    curso: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    instituicao: "Fatec Prof. Jessen Vidal",
    periodo: "2027",
  },
  {
    curso: "Ensino Médio com Técnico em Informática",
    instituicao: "São José dos Campos",
    periodo: "2024",
  },
];

var cursos = [
  {
    nome: "IT Essentials 7",
    inst: "Cisco Networking Academy",
    carga: "",
    certificado: null,
  },
  {
    nome: "Introdução à Programação Orientada a Objetos",
    inst: "Fundacao Bradesco",
    carga: "5h",
    certificado: "documents/poo.pdf",
  },
  {
    nome: "Modelagem de Dados",
    inst: "Fundacao Bradesco",
    carga: "8h",
    certificado: "documents/modelagem dados.pdf",
  },
  {
    nome: "Projetos de Sistemas de TI",
    inst: "Fundacao Bradesco",
    carga: "15h",
    certificado: "documents/sistema ti.pdf",
  },
  {
    nome: "Fundamentos de TI: Hardware e Software",
    inst: "Fundacao Bradesco",
    carga: "7h",
    certificado: "documents/fundamentos ti.pdf",
  },
];

var projetos = [
  {
    nome: "Mental Mentor",
    descricao:
      "App mobile de apoio à saúde mental, com sincronização em tempo real. Participei da criação da interface com Flutter e responsável pela documentação técnica do sistema.",
    tecnologias: ["Flutter", "Firebase"],
    tipo: "TCC - Técnico em Informatica (2024)",
    link: null,
  },
  {
    nome: "SIRAAS",
    descricao:
      "Aplicação web para gerenciamento de atestados escolares com módulo de avaliação ágil baseado em Scrum. Atuei no front-end e back-end, além da prototipagem no Figma.",
    tecnologias: ["Python", "Flask", "HTML", "CSS"],
    tipo: "Projeto Semestral - Fatec (2025)",
    link: null,
  },
  {
    nome: "Sphera",
    descricao:
      "Sistema desktop para gestão de PDIs para a empresa Youtan. Participei na criação da interface em JavaFX e a identidade visual do sistema.",
    tecnologias: ["Java", "JavaFX", "MySQL"],
    tipo: "Projeto Semestral - Fatec / Youtan (2025)",
    link: null,
  },
];

var skillsTec = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Python",
  "Java",
  "JavaFX",
  "Flutter",
  "Flask",
  "Firebase",
  "Git",
  "GitHub",
  "SQL",
  "Figma",
  "Documentação técnica",
];
var skillsSoft = [
  "Trabalho em equipe",
  "Comunicação",
  "Organização",
  "Proatividade",
  "Inglês intermediário",
];

var links = [
  { nome: "LinkedIn", url: "https://www.linkedin.com/in/isaura-de-lourdes-0561742aa/"},
  { nome: "GitHub", url: "https://github.com/sunrhse" },
  { nome: "Instagram", url: "https://www.instagram.com/sunrhse/" },
  { nome: "Currículo", url: "documents/CV - ISAURA BATISTA.pdf" },
];

function mostrarSaudacao() {
  var hora = new Date().getHours();
  var mensagem;

  if (hora >= 5 && hora < 12) {
    mensagem = "Bom dia! Bem-vindo(a) ao meu portfolio.";
  } else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde! Fique a vontade para explorar meu portfolio.";
  } else {
    mensagem = "Boa noite! Obrigada pela visita ao meu portfolio.";
  }

  document.getElementById("saudacao").textContent = mensagem;
}

function renderFormacao() {
  var container = document.getElementById("listaFormacao");

  for (var i = 0; i < formacao.length; i++) {
    var item = formacao[i];

    var div = document.createElement("div");
    div.className = "formacao-item";

    div.innerHTML =
      "<h3>" +
      item.curso +
      "</h3>" +
      "<p>" +
      item.instituicao +
      " - " +
      item.periodo +
      "</p>";

    container.appendChild(div);
  }
}

function renderCursos() {
  var lista = document.getElementById("listaCursos");

  for (var i = 0; i < cursos.length; i++) {
    var c = cursos[i];

    var li = document.createElement("li");

    var linkAbrir = "";
    if (c.certificado != null) {
      linkAbrir =
        "<a href='" +
        c.certificado +
        "' target='_blank' class='link-certificado'>Ver certificado</a>";
    }

    li.innerHTML =
      "<strong>" +
      c.nome +
      "</strong>" +
      "<span>" +
      c.inst +
      (c.carga ? " - " + c.carga : "") +
      "</span>" +
      linkAbrir;

    lista.appendChild(li);
  }
}

function renderProjetos() {
  var grid = document.getElementById("listaProjetos");

  for (var i = 0; i < projetos.length; i++) {
    var p = projetos[i];

    var tags = "";
    for (var j = 0; j < p.tecnologias.length; j++) {
      tags += "<span>" + p.tecnologias[j] + "</span>";
    }

    var linkHtml = "";
    if (p.link != null) {
      linkHtml = "<a href='" + p.link + "' target='_blank'>Ver projeto</a>";
    }

    var card = document.createElement("div");
    card.className = "projeto-card";

    card.innerHTML =
      "<h3>" +
      p.nome +
      "</h3>" +
      "<p>" +
      p.descricao +
      "</p>" +
      "<div class='tecnologias'>" +
      tags +
      "</div>" +
      "<p class='tipo'>" +
      p.tipo +
      "</p>" +
      linkHtml;

    grid.appendChild(card);
  }
}

function renderSkills() {
  var listaTec = document.getElementById("skillsTec");
  var listaSoft = document.getElementById("skillsSoft");

  for (var i = 0; i < skillsTec.length; i++) {
    var li = document.createElement("li");
    li.textContent = skillsTec[i];
    listaTec.appendChild(li);
  }

  for (var i = 0; i < skillsSoft.length; i++) {
    var li = document.createElement("li");
    li.textContent = skillsSoft[i];
    listaSoft.appendChild(li);
  }
}

function renderLinks() {
  var lista = document.getElementById("listaLinks");

  for (var i = 0; i < links.length; i++) {
    var l = links[i];

    var li = document.createElement("li");

    var a = document.createElement("a");
    a.href = l.url;
    a.target = "_blank";
    a.textContent = l.nome;

    li.appendChild(a);
    lista.appendChild(li);
  }
}

document.getElementById("ano").textContent = new Date().getFullYear();

mostrarSaudacao();
renderFormacao();
renderCursos();
renderProjetos();
renderSkills();
renderLinks();