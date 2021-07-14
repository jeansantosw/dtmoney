import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 5,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 5000,
          createdAt: new Date('2021-05-12 13:29:00')
        },
        {
          id: 1,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Pagamento',
          amount: 500,
          createdAt: new Date('2021-02-12 10:20:15')
        },
      ]
    })
  },
  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);