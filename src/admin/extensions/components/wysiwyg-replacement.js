import pluginId from './pluginId';

export default {
  register(app) {
    app.addFields({ type: 'wysiwyg', Component: lazy(() => import('./components/Wysiwyg')) });
  },
};
