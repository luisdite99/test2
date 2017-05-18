html, body
{
  margin:0;
  height:100%;
  background-color:#106010;
  -moz-user-select: none;
  cursor: default;
}

#arena
{
  width:800px;
  min-width:800px;
  height:500px;
  border:4px solid #70D070;
}

#bola
{
  width:30px;
  height:30px;
  border-radius:100%;
  background-color:#70D070;
}

#esq
{
  float:left;
  border-radius: 0 10px 10px 0;
}

#dir
{
  float:right;
  border-radius: 10px 0 0 10px;
}

#contador
{
  display:none;
  color:#70D070;
  font-size:280px;
  font-family:sans-serif;
  margin-top:50px;
  animation:contagem 1s infinite;
}

@keyframes contagem
{
  0%  {opacity:1}
  100%{opacity:0}
}

.absolute
{
  position:absolute;
}

.centro
{
  display:flex;
  align-items:center;
  justify-content:center;
}

.moldura
{
  background-color:#208020;
}

.barra
{
  width:10px;
  height:120px;
  background-color:#70D070;
}

.placar
{
  display:flex;
  flex-direction:column;
}

.caixa
{
  width:220px;
  height:150px;
  color:#70D070;
  font-size:180px;
  font-family:sans-serif;
}

.letra
{
  width:50px;
  height:50px;
  font-size:30px;
  color:#50B050;
  border-radius:10px;
}

.numero
{
  padding-top:30px;
}