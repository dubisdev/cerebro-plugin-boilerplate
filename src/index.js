const name = "Plugin Name";
const keyword = "kw";

const plugin = ({ term, display, actions, settings, config, hide }) => {
  display({
    title: "Plugin Title",
    getPreview: () => <h3>Hello world!</h3>,
  });
};

const settings = {
  example: {
    type: "string",
    defaultValue: "Example setting",
    description: "👌🚀",
  },
};

export { plugin as fn, name, keyword, settings };
