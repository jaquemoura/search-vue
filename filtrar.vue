<template>
    <div>
        <div>
            <slot name="titulo"></slot>
        </div>
        <input v-model="pesquisaInput" type="text">

        <ul>
            <template>
                <li v-for="(opcao, i) in opcoesAtiva" :key="i">{{opcao.nome}}</li>
            </template>
        </ul>

    </div>
</template>
<script>
export default {
    props: {
        opcoesFiltro: Array,
    },
    data() {
        return {
            pesquisaInput: "",  
        }
    },
    computed: {
        opcoesAtiva() {
            // let filtros;

            return this.opcoesFiltro.filter(opcao => {
            return opcao.nome.toLowerCase().includes(this.pesquisaInput.toLowerCase());
            });

            // return filtros;
        }
    }
}
</script>
