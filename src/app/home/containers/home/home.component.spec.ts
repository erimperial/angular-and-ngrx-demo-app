import { HomeComponent } from './home.component';

describe('component: home', () => {
  it('has a title of "The title"', () => {
    const component = new HomeComponent();
    component.title = 'The title';
    expect(component.title).toEqual('The title');
  });
});
