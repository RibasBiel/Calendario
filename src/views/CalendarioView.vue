<template>
    <div class="text-center section">
      <h2 class="h2">Custom Calendars</h2>
      <p class="text-lg font-medium text-gray-600 mb-6">
        Roll your own calendars using scoped slots
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
            >
              {{ attr.customData.title }}
            </div>
          </div>
        </div>
      </div>
    </template>
      </v-calendar>
    </div>
  </template>
  
  <script>

export default {
  
  data() {
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      return {
        masks: {
          weekdays: 'WWW',
        },
        attributes: [
          {
            key: 1,
            customData: {
              id: 1,
              title: 'Limpar mesa.',
              class: 'bg-red-600 text-white',
            },
            dates: new Date(year, month, 1),
          },
          {
            key: 2,
            customData: {
              id: 2,
              title: 'Take Noah to basketball practice',
              class: 'bg-blue-500 text-white',
            },
            dates: new Date(year, month, 2),
          },
          {
            key: 3,
            customData: {
              id: 3,
              title: "Noah's basketball game.",
              class: 'bg-blue-500 text-white',
            },
            dates: new Date(year, month, 5),
          },
          {
            key: 4,
            customData: {
              id: 4,
              title: 'Take car to the shop',
              class: 'bg-indigo-500 text-white',
            },
            dates: new Date(year, month, 5),
          },
          {
            key: 5,
            customData: {
              id: 5,
              title: 'Meeting with new client.',
              class: 'bg-teal-500 text-white',
            },
            dates: new Date(year, month, 7),
          },
          {
            key: 5,
            customData: {
              id: 6,
              title: "Mia's gymnastics practice.",
              class: 'bg-pink-500 text-white',
            },
            dates: new Date(year, month, 11),
          },
          {
            key: 6,
            customData: {
              id: 7,
              title: 'Cookout with friends.',
              class: 'bg-orange-500 text-white',
            },
            dates: { months: 5, ordinalWeekdays: { 2: 1 } },
          },
          {
            key: 7,
            customData: {
              id: 8,
              title: "Mia's gymnastics recital.",
              class: 'bg-pink-500 text-white',
            },
            dates: new Date(year, month, 22),
          },
          {
            key: 8,
            customData: {
              id: 9,
              title: 'Visit great grandma.',
              class: 'bg-red-600 text-white',
            },
            dates: new Date(year, month, 25),
          },
        ],
      };
    },

    methods: {
      abremodal(day, attributes, attr) {
      
        console.log(attr)
      
      // attributes.forEach(attr => {
      //   console.log(attr.customData)
      // });

        
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
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  font-size: 10px;
  border-radius: 0;
  width: 100%;
}

.custom-calendar.vc-container .vc-header {
  background-color: #f1f5f8;
  padding: 10px 0;
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

.custom-calendar.vc-container .vc-day {
  padding: 0 5px 3px 5px;
  text-align: left;
  height: var(--day-height);
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

.custom-calendar.vc-container .div.vc-day{
  font-size: 8px !important;
}
.custom-calendar.vc-container .vc-day-dots {
  margin-bottom: 5px;
}

.text-xs {
  margin-bottom: 10px;
}

  </style>