<template>
  <div>
    <v-container fluid grid-list-xl>
      <!-- <h3>Vuetify Form</h3> -->
      <v-form ref="form" lazy-validation>
        <v-container :fluid="true">
          <v-layout row wrap>
            <v-flex xs12 sm12 md6>
              <!-- Name -->
              <v-text-field v-model="form.name" label="Name" :rules="rules.name"></v-text-field>

              <!-- DOB -->
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="dobMenu"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="form.dob"
                  label="Birthday date"
                  readonly
                  :rules="rules.dob"
                ></v-text-field>
                <v-date-picker
                  ref="picker"
                  v-model="form.dob"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="saveDob"
                ></v-date-picker>
              </v-menu>

              <v-menu
                ref="menu1"
                :close-on-content-click="false"
                v-model="menu1"
                :nudge-right="40"
                :return-value.sync="date"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="form.dob"
                  label="Pick date"
                  prepend-icon="event"
                  :rules="rules.dob"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="form.dob" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu1 = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu1.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>

              <!-- Place of birth -->
              <v-autocomplete
                v-model="form.pob"
                :rules="rules.pob"
                :items="states"
                label="Place of birth"
                persistent-hint
              ></v-autocomplete>

              <!-- Email -->
              <v-text-field v-model="form.email" label="Email" type="email" :rules="rules.email"></v-text-field>

              <!--  Interested -->
              <v-layout row wrap class="light--text">
                <v-flex xs12>
                  <label class="v-label theme--light">Interest:</label>
                </v-flex>
                <v-flex xs3>
                  <v-checkbox v-model="form.interest" color="primary" label="Scient" value="Scient"></v-checkbox>
                </v-flex>
                <v-flex xs3>
                  <v-checkbox v-model="form.interest" color="primary" label="Math" value="Math"></v-checkbox>
                </v-flex>
                <v-flex xs3>
                  <v-checkbox v-model="form.interest" color="primary" label="Art" value="Art"></v-checkbox>
                </v-flex>
                <v-flex xs3>
                  <v-checkbox
                    v-model="form.interest"
                    color="primary"
                    label="History"
                    value="History"
                  ></v-checkbox>
                </v-flex>
              </v-layout>

              <!-- Upload img -->
              <v-flex xs12 align-center>
                <label class="v-label theme--light">Upload:</label>
                <uploader
                  :url="imageUrl"
                  :before-upload="handleImageBeforUpload"
                  width="130px"
                  height="130px"
                  @change-url="handleUrlChange"
                  @change="handleImageChange"
                ></uploader>
              </v-flex>
            </v-flex>

            <v-flex xs12 sm12 md6>
              <!-- Gender -->
              <v-select
                v-model="form.gender"
                :rules="rules.gender"
                :items="genderOpts"
                label="Gender"
                single-line
                item-text="label"
                item-value="value"
              ></v-select>
              <!-- Age -->
              <v-text-field
                label="Age"
                :rules="rules.age"
                v-model="form.age"
                type="number"
                :min="0"
              ></v-text-field>

              <!-- Subject -->
              <v-combobox
                v-model="form.subject"
                :rules="rules.subject"
                :filter="filterSubject"
                :hide-no-data="!search"
                :items="subjectOpts"
                :search-input.sync="search"
                hide-selected
                label="Choose your subject"
                multiple
                small-chips
              >
                <template
                  v-if="item === String(item)"
                  slot="selection"
                  slot-scope="{ item, parent, selected }"
                >
                  <v-chip color="green" :selected="selected" label small>
                    <span class="pr-2">{{ item }}</span>
                    <v-icon small @click="parent.selectItem(item)">close</v-icon>
                  </v-chip>
                </template>
              </v-combobox>

              <!-- Status -->
              <label class="v-label theme--light">Status:</label>
              <v-radio-group v-model="form.status" row :rules="rules.status">
                <!-- <div slot="label">Status: &nbsp;</div> -->
                <v-radio label="Single" value="Single" color="primary"></v-radio>
                <v-radio label="Married" value="Married" color="orange darken-3"></v-radio>
              </v-radio-group>

              <!-- Full time -->
              <v-switch label="Full Time" v-model="form.fullTime" color="indigo darken-3"></v-switch>

              <!-- Description -->
              <v-textarea
                v-model="form.description"
                label="Description"
                :auto-grow="true"
                rows="1"
                placeholder="Descript about your self"
              ></v-textarea>
            </v-flex>
          </v-layout>

          <!-- Aggreement -->
          <v-checkbox
            color="primary"
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn color="warning" @click="resetForm">Reset</v-btn>

          <v-btn color="primary" @click="submit">Submit</v-btn>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import _ from "lodash";
import Uploader from "../components/Uploader.vue";

// File
// import Files from "../api/files/files";

export default {
  name: "Form",
  components: { Uploader },
  data: () => ({
    agree: true,
    valid: false,
    // Form
    form: {
      name: "",
      gender: "",
      age: null,
      dob: null,
      email: "",
      pob: null,
      subject: [],
      status: "Single",
      fullTime: false,
      interest: [],
      description: ""
    },
    // Rule
    rules: {
      name: [v => !!v || "Name is required"],
      gender: [v => !!v || "Gender is required"],
      age: [v => !!v || "Age is required"],
      email: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      dob: [v => !!v || "Date of birth is required"],
      pob: [v => !!v || "Place of birth is required"],
      subject: [
        function(v) {
          if (_.isEmpty(v)) {
            return "Status is required";
          } else {
            return true;
          }
        }
      ],

      status: [v => !!v || "Status is required"]
    },

    // dob
    date: new Date().toISOString().substr(0, 10),
    dobMenu: false,
    menu1: false,
    // Img
    imageUrl: "",
    imageFile: null,
    // gender
    genderOpts: [
      { label: "M", value: "Male" },
      { label: "F", value: "FeMale" }
    ],
    select: null,
    checkbox: false,
    states: ["Phnom Penh", "Battambang", "Siem Reap", "Pur Sat", "Kan Dal"],
    search: null,
    subjectOpts: ["Khmer", "English"]
  }),

  watch: {
    dobMenu(val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    handleImageBeforUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (!isJPG) {
        this.openSnackbar({
          msg: "Image type must be JPG format!",
          color: "error",
          absolute: true
        });
      }
      if (!isLt1M) {
        this.openSnackbar({
          msg: "Image size can not exceed 2MB!",
          color: "error",
          absolute: true
        });
      }
      return isJPG && isLt1M;
    },
    // Change Image
    handleImageChange(file) {
      this.imageFile = file;
    },
    handleUrlChange(url) {
      this.imageUrl = url;
    },

    saveDob(date) {
      this.$refs.menu.save(date);
    },
    filterSubject(item, queryText, itemText) {
      if (item.header) return false;

      const hasValue = val => (val != null ? val : "");

      const text = hasValue(itemText);
      const query = hasValue(queryText);

      return (
        text
          .toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
      );
    },

    // Submit
    submit() {
      if (this.$refs.form.validate()) {
        this.openSnackbar({
          msg: "Success",
          color: "success"
        });

        // if (this.imageFile) {
        //   // Insert image
        //   const upload = Files.insert(
        //     {
        //       file: this.imageFile,
        //       streams: "dynamic",
        //       chunkSize: "dynamic"
        //     },
        //     true
        //   );

        //   // Get image object
        //   upload.on("end", function(error, result) {
        //     if (!error) {
        //       self.form.photo = result._id;
        //     }
        //   });
        // } else {
        //   self.form.photo = "";
        // }
      }
    },
    openSnackbar(stackOpts) {
      this.$store.commit("app/snackbar/setSnack", stackOpts);
    },
    resetForm() {
      this.$refs.form.reset();
      // Img
      this.imageFile = null;
      this.imageUrl = "";

      this.openSnackbar({
        msg: "Reset",
        color: "warning",
        absolute: true
      });
    }
  }
};
</script>



