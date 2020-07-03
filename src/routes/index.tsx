import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* o + depois da barra indica que toda a string depois da barra faz parte do nome
    da rota. Assim, o //rocketseat funcionaria, nesse app */}
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
