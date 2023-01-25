<template>
  <form method="post">
    <ul>
      <li>
        <label for="name">Name:</label>
        <input
          v-model.lazy="form.title"
          type="text"
          id="name"
          name="user_name"
        />
        <span style="color: red">{{ form.titleErrorText }}</span>
      </li>
      <li>
        <label for="msg">Message:</label>
        <textarea
          v-model.lazy="form.body"
          id="msg"
          name="user_message"
        ></textarea>
        <span style="color: red">{{ form.BodyErrorText }}</span>
      </li>
      <button @click.prevent="createpost">Create Post</button>
    </ul>
  </form>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const form = reactive({
      title: "",
      titleErrorText: "",
      BodyErrorText: "",
      body: "",
    });
    function createpost() {
      if (form.title === "") {
        form.titleErrorText = "Titl Is Requiedf";
      }
      if (form.body === "") {
        form.BodyErrorText = "Body Is Requiedf";
      }
      if (form.title !== "" && form.body !== "") {
        console.log( form.title);
        console.log( form.body);
    var resdf=  fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: form.title,
            body: form.body,
            userId: 5,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => {console.log(response.data)})
          .then((json) => console.log(json));
      }
      console.log(resdf.data);
    }

    return { form, createpost };
  },
};
</script>

<style>
</style>