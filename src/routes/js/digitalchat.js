import { makeRequest } from "./axios";
import { loading, mensajes } from "./chat";

export  async function chatDocumentAbogacy(id, caso, promptType, documento) {
   let historialMsj = [
    {'role': 'user', 'content': "Documento" + ":\n " + documento[0]}
   ]
   var data = JSON.stringify(historialMsj) 
   var digitalChat = await makeRequest('post', `/chat/${id}/${caso}/documentChat/${promptType}`, {data})
   console.log(data);
   mensajes.update(arr => [...arr, digitalChat.data ])
   location.reload()
}

export  async function procesos(id, caso, promptType) {
   var asistenciaF = `# Asistencia o Proforma  Familiar

   - Es la obligación que se tiene dentro la familia de asistir (ayudar) a quien necesita recursos para su desarrollo y es el derecho de quien debe ser asistido.
   - Un proceso de asistencia familiar dura de 2 a 4 meses. 
   
   ## Requisitos para la Asistencia Familiar
   
   - Contar con un abogado. 
   - Fotocopia de C.L De la Demandante.
    - Fotocopia de C.L.  del Demandado. 
   - Factura de luz  y agua de la Demandante.
   - Croquis de ubicación y fotografía del domicilio real o laboral del Demandado.
   - Número de cuenta de depósito de pensiones. 
   - Certificado de nacimiento en original del beneficiario. 
   - Certificado de los hijos.
   - Prueba de toma de sangre del padre y madre 
   
   ## Pensiones
   
    El monto de asistencia a favor de tus hijo/as como mínimo debe ser del 20% del salario mínimo nacional (Bs. 2.121), actualmente Bs. - 450 cuando el padre no trabaja.
    Dame un resumen de que debo hacer
    `;
   var divorcio = `# Divorcio

   - La pérdida de los derechos sucesorios entre los cónyuges, la pérdida de la pensión de viudedad, así como de las obligaciones derivadas directamente del matrimonio.
   - Ya que en bolivia no se necesita la aprobación del otro cónyuge para hacer la demanda del divorcio.
   
   ## Requisitos
   
    (EN BOLIVIA NO SE NECESITA LA APROBACIÓN DEL OTRO CÓNYUGE PARA HACER LA DEMANDA DE EL DIVORCIO)
   
   Para realizarlo ante el notario se requiere:
   - Carnet de Identidad de ambos esposos.
   - Mutuo acuerdo.
   - No haber tenido hijos en el matrimonio.
   - No tener bienes comunes ni gananciales.
   - No haber iniciado proceso judicial.
   
   Por otro lado, el divorcio judicial requiere:
   
   - Un abogado público o privado.
   - Demanda de divorcio estipulando las causales.
   - Carnet de Identidad de ambos esposos.
   - Certificado de Matrimonio original.
   - Certificados de Nacimiento de los hijos, si los tienen.
   - Original y fotocopia de los documentos que justifiquen la propiedad de los bienes adquiridos dentro del matrimonio debidamente certificados.
   - Original de documentos de bienes inmuebles en común que hayan inscrito en el registro público.
   - Originales de los documentos de los bienes obtenidos dentro del matrimonio, con fechas nombres, dirección, cédulas de identidad.
   
   ## Leyes y Derechos del Divorcio
   
   - Por su parte la Ley del Notariado (N° 483 de 25 de enero 2014) señala en su Art. 94, que procederá el divorcio notarial cuando: "Exista consentimiento y mutuo acuerdo sobre la disolución del matrimonio.
   - Según el artículo 131, se podrá ejecutar la demanda de divorcio por la separación de hecho libremente consentida y continuada por más de dos años (prueba veraz y duración continua de la separación del cónyuge).
   - El Artículo 207 de la ley 603 dice lo siguite: (LAS PERSONAS QUE PUEDEN EJERCER LA ACCION). La acción de divorcio o desvinculación se ejerce por la o el cónyuge o por ambos, por si o por medio de representación.
   
   ## Tipos de Divorcio
   
   - En el DIVORCIO JUDICIAL se define la guarda de los hijos y el monto de asistencia familiar.
   - En el DIVORCIO NOTARIAL es importante que ambas partes estén de acuerdo, que
   no hayan tenido hijos o quesean mayores de 25 años sean mayores de 25 años.
   Dame un resumen de que debo hacer`;
   var liquidacion = `# Liquidación Familiar

   - La liquidación se cobra dentro de una asistencia familiar 
   - Esto sucede cuando la parte demandada está incumpliendo en las pensiones de manera mensual como se acordo
   - La Demandante planteará una líquida pero (el juez pedirá un extracto de cuenta bancaria para evidenciar si se está pagando o no se está pagando las pensiones)
   
   ## Requisitos
   
   Para hacer una liquidación de asistencia familiar en Bolivia, se necesitan los siguientes requisitos:
   
   - Certificado de matrimonio original (si son casados)
   - Certificado de nacimiento original de los hijos menores de 18 años
   - Facturas o recibos de gastos en alimentos, vestimenta, educación
   - Croquis del domicilio
   - Papeleta de pago
   - Fotocopia de tu carnet de identidad
   - Testigos que no sean familiares para respaldar que hubo una relación.
   
   ## Leyes y derechos de la liquidación 
   
    - La liquidación de asistencia familiar en Bolivia está regulada por el Código de las Familias y del Proceso Familiar. 
   - El artículo 415 de este código establece que la parte beneficiaria presentará la liquidación de pago de la asistencia devengada que será puesta a conocimiento de la otra parte, quien podrá observar en el plazo de tres (3) días. 
   - Vencido el plazo, de oficio o a instancia de parte, la autoridad judicial aprobará la liquidación de la asistencia familiar, intimando al pago dentro del tercer día.
   
   ## Puntos claves del documento 
   
   - El artículo 415 del Código de Comercio establece que la parte beneficiaria presentará la liquidación de pago de la asistencia devengada que será puesta a conocimiento de la otra parte, quien podrá observar en el plazo de tres (3) días. 
   - Después de haber pasado (3) días puedes hacer la denuncia. En cambio la acumulación de la liquidación tiene que ser mayor a los gastos de la demanda.
   - Por otro lado, la liquidación tiene que ser ajustado a una posibilidad de cumplir para el demandado.
   Dame un resumen de que debo hacer`;
   var homologacion = `# Homologación

   - Si en bolivia tienes un documento transaccional conciliatorio de asistencia familiar con su reconocimiento de firmas ante notario de fe pública o tienes un documento suscrito tiene que ser Homologado ante el juez en materia familiar.
   - Homologar es darle un valor legal a partir de un reconocimiento de una autoridad competente, en este caso el juez o la juez materia familiar.
   
   ## Requisitos de Homologación 
   
   - C.L. del demandante. 
   - C.L. del Demandado.
   - Croquis del domicilio del Demandado.
   - Acuerdo regulador original.
   Dame un resumen de que debo hacer`;
   var guarda = `# Guarda

   La guarda familiar es una institución que permite asumir temporalmente el cuidado y custodia de un niño, niña o adolescente con carácter provisional y es otorgada mediante resolución judicial a uno de los progenitores. 
   
   ## Instituciones de Guarda.
   
   - La tutela es una institución de guarda estable que suple la falta de patria potestad y atiende a los menores de edad no emancipados y a los incapacitados cuando la sentencia de incapacitación así lo determine.
   
   ## Requisitos para la Guarda.
    
   - Los requisitos para solicitar la guarda familiar en Bolivia son establecidos por el Código de las Familias y del Proceso Familiar. 
   - Necesariamente menores de (18) años.
   
   ## Leyes y derechos de la Guarda
   
    
   - La ley que regula la guarda en Bolivia es el Código Niña, Niño y Adolescente (Ley Nº 548). El Código establece las clases de guarda, los requisitos para su otorgamiento y los derechos.
   Dame un resumen de que debo hacer`;
   
   switch (promptType) {
      case "AsistenFamiliar":
          var historialMsj = [
            {'role': 'user', 'content': "Procesode" + ":\n " + promptType + asistenciaF}]
            mensajes.update(arr => [...arr, historialMsj[0]])
      break;
      case "Divorcio":
          var historialMsj = [
            {'role': 'user', 'content': "Procesode" + ":\n " + promptType + divorcio}
           ]
           mensajes.update(arr => [...arr, historialMsj[0]])
      break;
      case "LIquidacion":
          var historialMsj = [
            {'role': 'user', 'content': "Procesode" + ":\n " + promptType + liquidacion}
           ]
           mensajes.update(arr => [...arr, historialMsj[0]])
      break;
      case "Homologacion":
         var historialMsj = [
            {'role': 'user', 'content': "Procesode" + ":\n " + promptType + homologacion}
           ]
           mensajes.update(arr => [...arr, historialMsj[0]])
      break;
      case "Guarda":
         var historialMsj = [
            {'role': 'user', 'content': "Procesode" + ":\n " + promptType + guarda}
           ]
           mensajes.update(arr => [...arr, historialMsj[0]])
      break;

      default:
      break;
   }
   loading.set(true)
   var data = JSON.stringify(historialMsj) 
   try {
   var digitalChat = await makeRequest('post', `/chat/${id}/${caso}/procesos/${promptType}`, {data})
   console.log(data);
   mensajes.update(arr => [...arr, digitalChat.data ])
   location.reload()
   } catch (error) {
   loading.set(false)
   }
}
