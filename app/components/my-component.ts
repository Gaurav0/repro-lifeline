import Component from '@ember/component';
import DomMixin from 'ember-lifeline/mixins/dom';

export default class MyComponent extends Component.extend(DomMixin, {
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
};
