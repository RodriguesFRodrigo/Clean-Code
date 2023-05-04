-- Sem usar o padrão de refatoração do método extract:
procedure main is
  valor number;
begin
  -- ...
  if valor > 0 then
    v_is_valid := 1;
  else
    v_is_valid := 0;
  end if;
   -- ...
end main;

/* ------------------------------ */

-- Aplicando o padrão de refatoração extract method:
function validarNumero(
  valor in number
)return number
is
begin
  if valor > 0 then
    return 1;
  else
    return 0;
  end if;
end;

procedure main is
  valor number;
begin
  -- ...
  v_is_valid := validarNumero(valor);
  -- ...
end main;