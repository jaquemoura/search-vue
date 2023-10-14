<template>
 <div>
    <filtro :opcoesFiltro="listagemData.detalhes.categorias.filhas">
        <template v-slot:titulo>
            <h4>Categorias</h4>
        </template>
    </filtro>
    <filtro :opcoesFiltro="listagemData.detalhes.marcas">
        <template v-slot:titulo>
            <h4>Marcas</h4>
        </template>
    </filtro>
 </div>
</template>
<script>
export default {
    data() {
        return {
            listagemData: {
                detalhes: {
                    categorias: {
                        filhas: [
                            { nome: "Teclado"},
                            { nome: "Guitarra"},
                            { nome: "Violão"},
                            { nome: "Baixo"},
                            { nome: "Bandolim"},
                            { nome: "Ukulele"},
                            { nome: "Violino"},
                            { nome: "Violoncelo"},
                            { nome: "Viola"},
                            { nome: "Clarinete"},
                            { nome: "Flauta"},
                            { nome: "Escaleta"},
                            { nome: "Trompete"},
                            { nome: "Saxofone"},
                            { nome: "Gaita"},
                            { nome: "Bateria"},
                        ]
                    },
                    marcas: [
                        { nome: "Yamaha" },
                        { nome: "Fender" },
                        { nome: "Gibson" },
                        { nome: "Takamine" },
                        { nome: "Tagima" },
                        { nome: "Strinberg" },
                    ]
                },
            }
        }
    },
    components: {
        filtro: () => import(/* webpackChunkName: "filtro" */ '@/components/listagem/filtrar.vue')
    }
}
</script>
