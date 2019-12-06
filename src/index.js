import app from './app';

const appName = 'NodeJS - Docker';
const PORT = 80;
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`Serviço: ${appName} ativo na porta: ${PORT}`);
});
