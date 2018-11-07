import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | import', function(hooks) {
  setupRenderingTest(hooks);

  test('it retrieves default export a name is not specified', async function(assert) {
    await render(hbs`{{import 'dummy/tests/fixtures/hello-world'}}`);

    assert.equal(this.element.textContent.trim(), 'hello world');
  });

  test('it retrieves specified export when name is specified', async function(assert) {
    await render(hbs`{{import 'dummy/tests/fixtures/hello-world?withStars'}}`);

    assert.equal(this.element.textContent.trim(), '⭐️ hello world ⭐️');
  })
});
