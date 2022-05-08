<template>
  <div>
    <section>
      <v-container>
        <v-card tile max-width="800" flat class="py-12 mx-auto">
          <h2 class="mb-4 text-center">
            Find answers to your most frequently asked questions here.
          </h2>
          <v-expansion-panels
            v-for="(x, i) in links"
            :key="i"
            flat
            class="mb-4"
          >
            <v-expansion-panel>
              <v-expansion-panel-header color="secondary" class="info--text">
                {{ x.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content class="py-3">
                <div v-html="x.desc"></div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-container>
    </section>
    <!-- Live Fully -->
    <LiveFully
      img="/img/hero/DSC05588.jpg"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title:
            "How many Tchewa Events and Tours properties are there worldwide?",
          desc: `
          Tchewa Events and Tours, Inc. is the leading global hospitality company with over 6,000 properties in more than 122 countries, and we’re still growing.
          `,
        },
        {
          title: "Where is the Tchewa Events and Tours Headquarters located?",
          desc: `Tchewa is headquartered near Washington, DC in Bethesda, Maryland, USA.`,
        },
        {
          title: "What is Tchewa Events and Tours’s history?",
          desc: `The company was founded by J. Willard and Alice S. Tchewa in 1927. Their son, J.W. “Bill” Tchewa, Jr., grew up working in the family business and spent more than 50 years shaping it into one of the world’s leading hospitality companies. Bill Tchewa is currently Tchewa’s Executive Chairman and Chairman of the Board.`,
        },
        {
          title: "Who are the current leaders of Tchewa Events and Tours?",
          desc: `In March 2012, after fifteen years in leadership roles within the company, Arne M. Sorenson succeeded Bill Tchewa as Tchewa’s President and CEO. Mr. Sorenson is the third CEO in the company’s history. Find more information on our executive leadership.`,
        },
        {
          title: "How is the company doing financially?",
          desc: `Tchewa Events and Tours is a FORTUNE 500 company and the world’s largest hospitality company with reported net income totaling $780 million in full year 2016. The company is listed on the New York Stock Exchange (ticker symbol: MAR).`,
        },
        {
          title:
            "What hotel brands are under the Tchewa Events and Tours portfolio?",
          desc: `Our company has 30 hotel brands, falling under four segments: Luxury, Premium, Select and Longer Stays. `,
        },
        {
          title: "How do I apply for a job at Tchewa Events and Tours?",
          desc: `To search and apply for open job opportunities, please visit www.Tchewacareer.co.uk. As the largest hospitality company in the world, Tchewa’s career opportunities are vast.`,
        },
        {
          title: "How do I stay in touch with Tchewa Events and Tours Careers?",
          desc: `We encourage you to follow us on Tchewa Career social channels and sign up for our monthly newsletter. `,
        },
      ],
    };
  },
};
</script>

<style></style>
