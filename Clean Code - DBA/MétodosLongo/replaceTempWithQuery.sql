procedure main is
  quantity number;
  itemPrice number;
is
  v_base_price number default 0;
begin
  -- ...
  v_base_price := quantity * itemPrice;

  if v_base_price > 1000 then
    return v_base_price * 0.95;
  else
    return v_base_price * 0.98;
  end if;
  -- ...
end main;

/* ------------------------------ */
/*
  Legibilidade do código.
  É mais fácil ler basePrice do que a linha quantity * itemPrice
*/
function basePrice(
  quantity in number,
  itemPrice in number
)return number
is
begin
  return quantity * itemPrice;
end;

procedure main is
  quantity number;
  itemPrice number;
is
  v_base_price number default 0;
begin
  -- ...  
  if basePrice() > 1000 then
    return basePrice() * 0.95;
  else
    return basePrice() * 0.98;
  end if;
  -- ...
end main;

/* ------------------------------ */