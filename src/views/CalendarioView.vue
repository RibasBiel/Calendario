<template>
  <div>
    <transition name="modal-slide">
      <div v-if="showModal" class="modal" @click.self="closeModal">
        <div class="modal-content sidebar" @click.stop>
          <button @click="closeModal" class="close-button-sidebar">
            &times;
          </button>
          <button @click="closeModal" class="close-modal-button">
            &times;
          </button>
          <div class="cadastro-atividade">
            <div class="campo-editavel">
              <label for="titulo">Título:</label>
              <input
                type="text"
                id="titulo"
                v-model="selectedActivity.customData.title"
              />
              <br />
              <label for="descricao">Descrição:</label>
              <textarea
                rows="15"
                id="descricao"
                v-model="selectedActivity.customData.description"
              ></textarea>
            </div>
            <div class="campo-editavel-dp">
              <VDatePicker v-model.range="range" mode="dateTime" />
            </div>
            <div class="campo-editavel">
              <div class="campo-titulo">Responsável:</div>
              <select class="campo-resp campo-select">
                <option>Carol Lopes</option>
                <option>Tainah Minei</option>
                <option>Thabita</option>
              </select>
              <div class="campo-titulo">Status:</div>
              <select class="campo-status campo-select">
                <option>Aberto</option>
                <option>Em andamento</option>
                <option>Encerrado</option>
              </select>
              <br />
              <button @click="editarAtividade" class="editar-button">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <div>
    <div></div>

    <div class="text-center section">
      <h2 class="h2">Calendário</h2>
      <p class="text-lg font-medium text-gray-600 mb-6">
        Lista de atividades do mês.
      </p>
      <v-calendar
        class="custom-calendar max-w-full"
        :masks="masks"
        :attributes="attributes"
        disable-page-swipe
        is-expanded
      >
        <template v-slot:day-content="{ day, attributes }">
          <div class="flex flex-col h-full z-10 overflow-hidden">
            <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
            <div class="flex-grow overflow-y-auto overflow-x-auto">
              <div v-for="attr in attributes" :key="attr.key">
                <div
                  @click="() => abremodal(day, attributes, attr)"
                  class="text-xs leading-tight rounded-sm p-1 mt-1 mb-1"
                  :class="attr.customData.class"
                  :style="{ backgroundColor: setBackgroundColor(attr) }"
                >
                  {{ attr.customData.title }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </v-calendar>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      start: new Date(2024, 1, 1),
      end: new Date(),
      selectedActivity: null,
      showModal: false,
      masks: {
        weekdays: "WWW",
      },
      attributes: [
        {
          key: 1,
          customData: {
            id: 1,
            title: "Limpar mesa.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            id: 2,
            title: "Take Noah to basketball practice",
            class: "bg-blue-500 text-white",
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            id: 3,
            title: "Noah's basketball game.",
            class: "bg-blue-500 text-white",
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            id: 4,
            title: "Take car to the shop",
            class: "bg-indigo-500 text-white",
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 5,
          customData: {
            id: 5,
            title: "Meeting with new client.",
            class: "bg-teal-500 text-white",
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            id: 6,
            title: "Mia's gymnastics practice.",
            class: "bg-pink-500 text-white",
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            id: 7,
            title: "Cookout with friends.",
            class: "bg-orange-500 text-white",
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            id: 8,
            title: "Mia's gymnastics recital.",
            class: "bg-pink-500 text-white",
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            id: 9,
            title: "Visit great grandma.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 25),
        },
      ],
    };
  },

  methods: {
    setBackgroundColor(id) {
      console.log(id);
      if (id.customData.id === 7) {
        return "#98FB98";
      } else {
        return "transparent";
      }
    },
    abremodal(day, attributes, attr) {
      this.selectedActivity = attr;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
  
  <style>
::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  display: none;
}

.custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #b8f2d7;
  --weekday-border: 1px solid rgb(116, 115, 115);
  font-size: 2vb;
  border-radius: 0;
  width: 100%;
}

.custom-calendar.vc-container .vc-header {
  background-color: #10cb8a;
  padding: 10px 0;
  height: 50px;
}

.custom-calendar.vc-container .vc-weeks {
  padding: 0;
}

.custom-calendar.vc-container .vc-weekday {
  background-color: var(--weekday-bg);
  border-bottom: var(--weekday-border);
  border-top: var(--weekday-border);
  padding: 5px 0;
}

body .vc-header.is-lg * {
  /* display: block!important; */
  /* visibility: visible!important; */
  /* opacity: 1!important; */
  z-index: 9;
}

.vc-title {
  font-size: 2.5vh;
  font-weight: 600;
  color: #fff !important;
  background-color: #20ad7c;
  text-align: center;
  margin: 0;
}
.custom-calendar.vc-container .vc-day {
  padding: 0 5px 3px 5px;
  text-align: left;
  height: 25vh;
  min-width: var(--day-width);
  background-color: white;
}

.custom-calendar.vc-container .vc-day.weekday-1,
.custom-calendar.vc-container .vc-day.weekday-7 {
  background-color: #eff8ff;
}

.custom-calendar.vc-container .vc-day:not(.on-bottom) {
  border-bottom: var(--day-border);
}

.custom-calendar.vc-container .vc-day.weekday-1:not(.on-bottom) {
  border-bottom: var(--day-border-highlight);
}

.custom-calendar.vc-container .vc-day:not(.on-right) {
  border-right: var(--day-border);
}

.custom-calendar.vc-container .div.vc-day {
  font-size: 8px !important;
}
.custom-calendar.vc-container .vc-day-dots {
  margin-bottom: 5px;
}

.text-xs {
  margin-bottom: 10px;
  border-radius: 3px;
  padding: 2px;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

.activity-form {
  display: flex;
  flex-direction: column;
}

.activity-form label {
  margin-top: 10px;
}

.activity-form input,
.activity-form textarea {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.activity-form button {
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: transform 0.6s ease-out; /* Tempo da transição */
}
.modal-slide-enter,
.modal-slide-leave-to {
  transform: translateY(100%); /* Posição inicial e final da transição */
}

/* Estilo do sidebar */
.modal-content.sidebar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%; /* Altura inicial para 0 */
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  overflow: hidden; /* Esconde o conteúdo que ultrapassa a altura inicial de 0 */
}

.modal-slide-enter-active {
  height: 60%; /* Altura desejada durante a transição de entrada */
}

.close-button-sidebar {
  position: absolute;
  top: 10px;
  right: 60px;
  font-size: 20px;
  cursor: pointer;
}

.close-modal-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: #000;
}

.campo-editavel {
  width: 350px;
}

.campo-editavel-dp {
  justify-content: center;
  justify-items: center;
  margin: auto;
}

.campo-editavel label {
  display: block;
  text-align: start;
  margin-bottom: 5px;
  font-size: 12px;
  width: 100%;
  text-align:left;
  margin-left: 30px;
}

.campo-editavel input{
  margin-left: 30px;
  width: 100%;
  height: 30px;
}
.campo-editavel textarea {
  margin-left: 30px;
  width: 100%;
}

.editar-button {
  bottom: 50px;
  right: 50px;
  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: none;
}

.cadastro-atividade {
  display: flex;
  flex-direction: row;
  width: 95%;
  justify-content: center;
  justify-items: center;
}

.campo-editavel {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5%;
}

.campo-titulo {
  margin-bottom: 10px;
  font-size: 12px;
  width: 80%;
  text-align: left;
}

.campo-select {
  width: 80%; 
  margin-bottom: 20px;
  height: 10%;
  font-size: 13px
}
</style>