<template>
  <div>
    <v-container fluid>
      <v-stepper v-model="stepper">
        <v-stepper-header>
          <v-stepper-step step="1" :complete="step1Complete" editable>Name of step 1</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2" :complete="step2Complete" editable>Name of step 2</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3" :complete="step3Complete" editable>Name of step 3</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-form ref="form1" lazy-validation>
              <v-layout wrap>
                <v-flex xs12 sm12 md6 class="pa-1">
                  <v-text-field
                    v-model="form1.firstName"
                    :rules="rules.firstName"
                    label="First name"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md6 class="pa-1">
                  <v-text-field
                    v-model="form1.secondName"
                    :rules="rules.secondName"
                    label="Last name"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
            <v-btn color="primary" @click="submit(1)">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-form ref="form2" lazy-validation>
              <v-layout wrap>
                <v-flex xs12 sm12 md6 class="pa-1">
                  <v-text-field
                    v-model="form2.thirdName"
                    :rules="rules.thirdName"
                    label="Third name"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md6 class="pa-1">
                  <v-text-field
                    v-model="form2.fourthName"
                    :rules="rules.fourthName"
                    label="Fourth name"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
            <v-btn color="primary" @click="submit(2)">Continue</v-btn>
            <v-btn text @click="stepper = 1">Back</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-form ref="form3" lazy-validation>
              <v-layout wrap>
                <v-flex xs12 sm12 md6 class="pa-1">
                  <v-text-field
                    v-model="form3.fifthName"
                    :rules="rules.fifthName"
                    label="Fifth name"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm12 md6 class="pa-1">
                  <v-text-field
                    v-model="form3.sixthName"
                    :rules="rules.sixthName"
                    label="Sixth name"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
            <v-btn color="primary" @click="submit(3)">Continue</v-btn>
            <v-btn text @click="stepper = 2">Back</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DormWizard",
  data() {
    return {
      stepper: 1,
      step1Complete: false,
      step2Complete: false,
      step3Complete: false,

      form1: {
        firstName: "",
        secondName: ""
      },
      form2: {
        thirdName: "",
        fourthName: ""
      },
      form3: {
        fifthName: "",
        sixthName: ""
      },
      rules: {
        firstName: [v => !!v || "First name is required"],
        secondName: [v => !!v || "First name is required"],
        thirdName: [v => !!v || "First name is required"],
        fourthName: [v => !!v || "First name is required"],
        fifthName: [v => !!v || "First name is required"],
        sixthName: [v => !!v || "First name is required"]
      }
    };
  },
  methods: {
    submit(step) {
      if (step === 1) {
        if (this.$refs.form1.validate()) {
          this.step1Complete = true;
          this.stepper = 2;
        }
      } else if (step === 2) {
        if (this.$refs.form2.validate()) {
          this.step2Complete = true;
          this.stepper = 3;
        }
      } else if (step === 3) {
        if (this.$refs.form3.validate()) {
          this.step3Complete = true;
          this.stepper = 1;
        }
      }
    },

    reset() {
      this.$refs.form1.reset();
      this.$refs.form2.reset();
      this.$refs.form3.reset();
      this.stepper = 1;
    }
  }
};
</script>
