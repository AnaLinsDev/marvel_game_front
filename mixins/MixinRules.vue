<script>
export default {
  data: () => ({
    rules: {
      required: (v) => !!v || "Required.",
      pass_min_6: (v) =>
        v.length >= 6 || "Password must have at least 6 characters",
      name_min_3: (v) =>
        (v && v.length >= 3) || "Name must have at least 3 characters",
      name_max_10: (v) =>
        (v && v.length <= 10) || "Name must be less than 10 characters",
      email_valid: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    },
  }),
};
</script>
