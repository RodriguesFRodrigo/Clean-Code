-- Sem usar o padrão de refatoração do método extract:
-- Without using the extract method refactoring pattern
if valor > 0 then
   dbms_output.put_line('valor é positivo');
else
   dbms_output.put_line('valor é negativo');
end if;

-- Aplicando o padrão de refatoração extract method:
-- Appling the extract method pattern:
function validarNumero(
  valor in number
)return number
is
begin
  if valor > 0 then
    dbms_output.put_line('valor é positivo');
    return 1;
  else
    dbms_output.put_line('valor é negativo');
    return 0;
  end if;
end;

-- Apenas chame o método passando o parâmetro:
-- Just called the method passing the parameter:
procedure main is
   valor number;
begin
   -- ...
   v_is_valid := validarNumero(valor);
   -- ...
end main;