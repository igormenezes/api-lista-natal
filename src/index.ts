import route from './config/route'
const app = route()
app.listen(process.env.PORT || 3000, () => console.log('servidor rodando'))