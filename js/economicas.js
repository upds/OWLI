const economicas = [
    {
        numb: 1,
        question: "¿Qué significa PIB?",
        answer: "Producto Interno Bruto",
        options: ["Producto Interno Bruto", "Producto Industrial Básico", "Plan de Inversión Bancaria", "Producción Internacional Bruta"]
    },
    {
        numb: 2,
        question: "¿Qué institución emite la moneda boliviana?",
        answer: "Banco Central de Bolivia",
        options: ["Banco Unión", "ASFI", "Banco Central de Bolivia", "Ministerio de Economía"]
    },
    {
        numb: 3,
        question: "¿Qué es la inflación?",
        answer: "Aumento general de precios",
        options: ["Disminución de precios", "Aumento general de precios", "Incremento salarial", "Reducción de impuestos"]
    },
    {
        numb: 4,
        question: "¿Qué representa la demanda?",
        answer: "Cantidad que los consumidores desean comprar",
        options: ["Cantidad que los productores venden", "Cantidad que los consumidores desean comprar", "Costo de producción", "Utilidad empresarial"]
    },
    {
        numb: 5,
        question: "¿Qué representa la oferta?",
        answer: "Cantidad que los productores desean vender",
        options: ["Cantidad que los productores desean vender", "Cantidad que los consumidores compran", "Ingreso familiar", "Impuesto estatal"]
    },
    {
        numb: 6,
        question: "¿Qué es un presupuesto?",
        answer: "Plan de ingresos y gastos",
        options: ["Préstamo bancario", "Plan de ingresos y gastos", "Impuesto", "Inversión"]
    },
    {
        numb: 7,
        question: "¿Cuál es el principal objetivo de una empresa?",
        answer: "Generar valor y beneficios",
        options: ["Emitir dinero", "Generar valor y beneficios", "Cobrar impuestos", "Regular mercados"]
    },
    {
        numb: 8,
        question: "¿Qué es el ahorro?",
        answer: "Parte del ingreso no gastada",
        options: ["Parte del ingreso no gastada", "Un impuesto", "Una deuda", "Un gasto"]
    },
    {
        numb: 9,
        question: "¿Qué es una inversión?",
        answer: "Uso de recursos para obtener beneficios futuros",
        options: ["Pago de impuestos", "Uso de recursos para obtener beneficios futuros", "Gasto corriente", "Préstamo"]
    },
    {
        numb: 10,
        question: "¿Qué significa IVA?",
        answer: "Impuesto al Valor Agregado",
        options: ["Impuesto al Valor Agregado", "Impuesto de Ventas Anuales", "Ingreso Variable Acumulado", "Impuesto de Valor Administrativo"]
    },
    {
        numb: 11,
        question: "¿Qué es un activo?",
        answer: "Bien o derecho con valor económico",
        options: ["Una deuda", "Bien o derecho con valor económico", "Un impuesto", "Un gasto"]
    },
    {
        numb: 12,
        question: "¿Qué es un pasivo?",
        answer: "Obligación o deuda",
        options: ["Activo fijo", "Ingreso", "Obligación o deuda", "Capital"]
    },
    {
        numb: 13,
        question: "¿Qué mide la tasa de desempleo?",
        answer: "Porcentaje de personas sin trabajo",
        options: ["Porcentaje de empresas", "Porcentaje de personas sin trabajo", "Nivel de inflación", "Nivel de exportaciones"]
    },
    {
        numb: 14,
        question: "¿Qué es el capital?",
        answer: "Recursos utilizados para producir bienes y servicios",
        options: ["Mano de obra", "Recursos utilizados para producir bienes y servicios", "Impuestos", "Consumo"]
    },
    {
        numb: 15,
        question: "¿Qué es una exportación?",
        answer: "Venta de bienes al extranjero",
        options: ["Compra de bienes", "Venta de bienes al extranjero", "Producción interna", "Consumo nacional"]
    },
    {
        numb: 16,
        question: "¿Qué es una importación?",
        answer: "Compra de bienes del extranjero",
        options: ["Venta de bienes", "Compra de bienes del extranjero", "Producción agrícola", "Inversión extranjera"]
    },
    {
        numb: 17,
        question: "¿Qué estudia la microeconomía?",
        answer: "Comportamiento de consumidores y empresas",
        options: ["Economía mundial", "Comportamiento de consumidores y empresas", "Política monetaria", "Comercio internacional"]
    },
    {
        numb: 18,
        question: "¿Qué estudia la macroeconomía?",
        answer: "La economía en su conjunto",
        options: ["Una empresa", "La economía en su conjunto", "Los consumidores", "Los mercados locales"]
    },
    {
        numb: 19,
        question: "¿Qué es un crédito?",
        answer: "Préstamo de dinero",
        options: ["Ahorro", "Préstamo de dinero", "Inversión", "Impuesto"]
    },
    {
        numb: 20,
        question: "¿Qué es la ganancia?",
        answer: "Diferencia positiva entre ingresos y gastos",
        options: ["Diferencia positiva entre ingresos y gastos", "Impuesto", "Deuda", "Capital"]
    },
    {
        numb: 21,
        question: "¿Qué es el mercado?",
        answer: "Lugar donde interactúan compradores y vendedores",
        options: ["Una fábrica", "Lugar donde interactúan compradores y vendedores", "Banco", "Ministerio"]
    },
    {
        numb: 22,
        question: "¿Qué es el costo de producción?",
        answer: "Gasto necesario para producir bienes",
        options: ["Ingreso empresarial", "Gasto necesario para producir bienes", "Impuesto", "Capital social"]
    },
    {
        numb: 23,
        question: "¿Qué es la productividad?",
        answer: "Relación entre producción y recursos utilizados",
        options: ["Cantidad de impuestos", "Relación entre producción y recursos utilizados", "Nivel de ahorro", "Precio de mercado"]
    },
    {
        numb: 24,
        question: "¿Qué es la banca?",
        answer: "Actividad de intermediación financiera",
        options: ["Actividad agrícola", "Actividad industrial", "Actividad de intermediación financiera", "Actividad comercial"]
    },
    {
        numb: 25,
        question: "¿Qué es el interés bancario?",
        answer: "Costo o rendimiento del dinero prestado",
        options: ["Costo o rendimiento del dinero prestado", "Impuesto estatal", "Salario", "Subsidio"]
    },
];