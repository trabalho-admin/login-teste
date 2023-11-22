'use strict'
/*
var user = {
    "name": '',
    "password": '',
    "xp": 0.0,
    "level": 0,
    "colectedStars": 0,

    "quizCurrentTopic": "",
    "quizCurrentQuestion": 0,
    "quizCompletedTopics": "",

    "roadMapPorcentagem": 0,
    "materiasConcluidas":[],
    "materiasNaoConcluidas":[["ADM da produção",0] ],

    "gameCurrentLevel": 0,
    "gameRankPosition": 0

}
*/
class Usuario{
    //atributos
    constructor(nome, senha){
        this.nome = nome;
        this.senha = senha;
        this.xp = 0.0;
        this.nivel = 0;
        this.estrelasColetadas = 0;
    
        this.quizTopicoAtual = "";
        this.quizQuestaoAtual = 0;
        this.quizTopicosCompletos = [];
        this.quizTopicosNaoCompletos = [];
        this.quizRankPosicao = 0;
        this.quizEstrelasColetadas = 0;
    
        this.roadMapPorcentagem = 0;
        this.roadMapMateriasConcluidas = []
        this.roadMapMateriasNaoConcluidas = []
    
        this.jogoNivelAtual = 0;
        this.jogoRankPosicao = 0;
    }




    //setters

    //usuario
    set setNome(novoNome){
        this.nome = novoNome;
    }

    set setSenha(novaSenha){
        this.senha = novaSenha;
    }

    set setXp(xp){
        this.xp = xp;
    }

    set setNivel  (novoNivel){
        this.nivel = novoNivel;
    }

    set setEstrelas  (estrelas){
         this.estrelasColetadas = estrelas;
    }

    //quiz
   set setQuizTopicoAtual  (novoTopico){
        this.quizTopicoAtual = novoTopico;
    }

    set setQuizQuestaoAtual(questaoAtual){
        this.quizQuestaoAtual = questaoAtual; 
    }  

    set setQuizTopicosCompletos(arrayTopicosCompletos){
        this.quizTopicosCompletos = arrayTopicosCompletos;
    }

    set setQuizTopicosNaoCompletos(arrayTopicosNaoCompletos){
        this.quizTopicosNaoCompletos = arrayTopicosNaoCompletos;
    }

    set setQuizEstrelasColetadas  (quantEstrelas){
        this.quizEstrelasColetadas = quantEstrelas;
    }

    set setQuizRankPosicao (posicao){
        this.quizRankPosicao = posicao;
    }

    //roadmap
    set setRoadMapPorcentagem  (porcentagem){
        this.roadMapPorcentagem = porcentagem;
    }

    set setJogoNivelAtual(nivelAtual){
        this.jogoNivelAtual = nivelAtual;
    }

    set setJogoRankPosicao(novoRank){
        this.jogoRankPosicao = novoRank;
    }

    //getters

    get getRoadMapMateriasConcluidas(){
        return this.roadMapMateriasConcluidas;
    }

    get getRoadMapMateriasNaoConcluidas(){
        return this.roadMapMateriasNaoConcluidas;
    }

    get getQuizQuestaoAtual(){
        return this.quizQuestaoAtual;
    }

    get getQuizTopicosCompletos(){
        return this.quizTopicosCompletos;
    }


    //-------------------------------------extra
    addRoadMapMateriasConcluidas(materiaConcluida){
        this.roadMapMateriasConcluidas.push(materiaConcluida);
    }

    removerRoadMapMateriasConcluidas  (materiaConcluida){
        if(getRoadMapMateriasConcluidas().indexOf(materiaConcluida) > 0){
            this.roadMapMateriasConcluidas.splice(getRoadMapMateriasConcluidas().indexOf(materiaConcluida), getRoadMapMateriasConcluidas().indexOf(materiaConcluida) - 1);
        }else{
            this.roadMapMateriasConcluidas.splice(getRoadMapMateriasConcluidas().indexOf(materiaConcluida), getRoadMapMateriasConcluidas().indexOf(materiaConcluida) + 1);
        }
    }

    addRoadMapMateriasNaoConcluidas(materiaNaoConcluida){
        this.roadMapMateriasNaoConcluidas.push(materiaNaoConcluida);
    }

    removeRoadMapMateriasNaoConcluidas (materiaNaoConcluida){
        if(getRoadMapMateriasNaoConcluidas().indexOf(materiaNaoConcluida) > 0){
            this.roadMapMateriasNaoConcluidas.splice(getRoadMapMateriasNaoConcluidas().indexOf(materiaNaoConcluida), getRoadMapMateriasNaoConcluidas().indexOf(materiaNaoConcluida) -1 );
        }else{
            this.roadMapMateriasNaoConcluidas.splice(getRoadMapMateriasNaoConcluidas().indexOf(materiaNaoConcluida), getRoadMapMateriasNaoConcluidas().indexOf(materiaNaoConcluida) +1 );
        }
    }
    
    addQuizQuestaoAtual(questaoAtual){
        this.quizQuestaoAtual.push(questaoAtual); 
    }  

    removeQuizQuestaoAtual(questaoAtual){
        if(getQuizQuestaoAtual().indexOf(questaoAtual) > 0){
            this.quizQuestaoAtual.splice(getQuizQuestaoAtual().indexOf(questao), getQuizQuestaoAtual().indexOf(questao) - 1)
        }else{
            this.quizQuestaoAtual.splice(getQuizQuestaoAtual().indexOf(questao), getQuizQuestaoAtual().indexOf(questao) + 1)
        }        
    }

    addQuizTopicosCompletos(topicoCompletado){
        this.quizTopicosCompletos.push(topicoCompletado);
    }

    removeQuizTopicosCompletos(topicoCompletado){
        if(getQuizTopicosCompletos().indexOf(topicoCompletado) > 0){
            this.quizTopicosCompletos.splice(getQuizTopicosCompletos().indexOf(topicoCompletado), -1);
        }else{
            this.quizTopicosCompletos.splice(getQuizTopicosCompletos().indexOf(topicoCompletado), + 1);
        }

    }

}