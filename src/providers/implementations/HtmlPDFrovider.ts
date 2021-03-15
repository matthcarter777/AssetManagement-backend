import { AppError } from './../../Errors/AppError';
import PDF from 'html-pdf';

import ILendingContractPDF from '../dto/ILendingContractPDF';
import IPDFKitProvider from '../models/IPDFKitProvider';

class HtmlPDFProvider implements IPDFKitProvider{
  generateContract(lendingContract: ILendingContractPDF): Promise<string> {
    const pdf = PDF;

    const htmlContent = `
      <h2 style="text-align: center; margin-top: 30px" >CONTRATO DE COMODATO</h2>
      </br>
      <p style="margin: 10px 40px 0px 40px" ><strong>COMODANTE: ITAFÓS MINERAÇÃO S/A.,</strong> com matriz estabelecida à Rodovia GO-110 de Campos Belos a Novo Alegre Km 5,5 à esquerda Km 16,
        local denominado Fazenda São Bento, Zona Rural, município de Arraias – TO, CEP 77330-000, com ato constitutivo arquivado na Junta 
        Comercial do estado de Tocantins sob nº 17200245001 em sessão de 06/10/2003, inscrita no CNPJ sob nº 05.919.578/0001-60, doravante designada <strong>“ITAFÓS”</strong>; 
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px" ><strong>COMODATÁRIO: ${lendingContract.name}, brasileiro, Coordenador Contábil, Portador do CPF: ${lendingContract.cpf}, 
        Matricula: ${lendingContract.registration}</strong> - doravante designado <strong> “COMODATÁRIO”.</strong>; 
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        As PARTES acima identificadas têm, entre si, justo e acertado o presente Contrato de <strong>COMODATO</strong>, que regerá pelas cláusulas seguinte: 
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        1.<strong> CLÁUSULA PRIMEIRA – DO OBJETO DO CONTRATO: </strong>
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        1.1 O presente contrato tem como OBJETO, a transferência, pela <strong>COMODATÁRIO</strong> ao <strong>COMODATÁRIO</strong>, dos direitos de uso e gozo de (01) notebook, modelo: ${lendingContract.identification} Contendo um kit com carregador e bateria. 
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        1.1 Números de série do aparelho: <strong> ${lendingContract.identification} </strong> 
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        2. <strong>CLÁUSULA SEGUNDA – DAS OBRIGAÇÕES DAS PARTES: </strong> 
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        2.1. <strong>COMODANTE </strong> 
        é responsável pelo pagamento do plano em que se enquadra o Comodatário, compreendidas no período de vigência deste contrato, até o limite do plano exceto as utilizações particulares.
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        2.2.  É proibido ao <strong>COMODATÁRIO</strong> 
        emprestar o objeto descrito no item 1.1 deste contrato, a terceiros. 
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        2.3. O <strong>COMODATÁRIO</strong> deverá comunicar imediatamente à <strong>COMODANTE</strong> os defeitos que surgirem no bem, que providenciará o conserto do mesmo. 
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        3. <strong>CLÁUSULA TERCEIRA – DA DEVOLUÇÃO: </strong> 
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        3.1. O <strong>COMODATÁRIO</strong> <strong>COMODANTE</strong> deverá devolver o aparelho e seus respectivos acessórios à
        quando for por esta solicitado, nas mesmas condições em que estava quando o recebeu, em perfeitas condições de uso, respondendo pelos danos ou prejuízos causados.  
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        3.2. A devolução deve se dar no prazo de 24 (vinte e quatro) horas após o <strong>COMODATÁRIO</strong> ter recebido/entregue o aviso de desligamento/encerramento, 
        seja por e-mail, correspondência ou por outros meios, independente de justificativa.   
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        4. <strong>CLÁUSULA QUARTA – DA DURAÇÃO: </strong>   
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        4.1. Este contrato tem a duração de 02 dois anos, podendo ser prorrogado tacitamente por prazo indeterminado   
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        5. <strong>CLÁUSULA QUINTA – DA RESCISÃO:  </strong>   
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        5.1.  O presente contrato poderá ser rescindido a qualquer tempo, a critério das partes.   
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        5.2.  O presente contrato será rescindido imediatamente quando for infringida qualquer cláusula pelo <strong>COMODATÁRIO, </strong>bem como quando ocorrer a rescisão do contrato de trabalho firmado entre o   
        <strong>COMODATÁRIO </strong> e a <strong>ITAFÓS </strong>imediatamente.
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        6. <strong>CLÁUSULA SEXTA – CONDIÇÕES GERAIS: </strong>   
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        6.1. O presente instrumento passa a valer a partir da assinatura pelas partes.  
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        7. <strong>CLÁUSULA SÉTIMA – DO FORO:  </strong>   
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        7.1. Para dirimir quaisquer controvérsias oriundas do<strong>CONTRATO</strong>, as partes elegem o foro da comarca de São Paulo/SP.  
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        Por estarem assim justos e contratados, firmam o presente instrumento, em 03 (três) vias de igual teor, juntamente com 02 (duas) testemunhas.   
      </p>
      </br>
      <p style="text-align: center;">
        São Paulo,${lendingContract.date}.    
      </br>
      </br>
      <p style="text-align: center;">
        <strong>COMODANTE:</strong>  
      </p>
      </br>
      <p style="text-align: center;">
        <strong>____________________________</strong>  
      </p>
      </br>
      </br>
      </br>
      <p style="text-align: center;">
        <strong>COMODATÁRIO: </strong>  
      </p>
      </br>
      <p style="text-align: center;">
        <strong>_________________________________ </strong>  
      </p>
      <p style="text-align: center;">
        <strong>${lendingContract.name}</strong>  
      </p>
      <p style="text-align: center;">
        <strong>${lendingContract.cpf}</strong>  
      </p>
      </br>
      <p style="margin: 0px 40px 0px 40px">
        <strong>Testemunhas: </strong>   
      </p>
      </br>
      <p style="margin: 0px 40px 5px 40px">
        1. _____________________________________
      </p>
      <p style="margin: 0px 40px 0px 40px">
        <strong>CPF:</strong>
      </p>
      </br>
      </br>
      <p style="margin: 0px 40px 5px 40px">
        2. _____________________________________
      </p>
      <p style="margin: 0px 40px 0px 40px">
        <strong>CPF:</strong>
      </p>
    `;

    pdf.create(htmlContent,{}).toFile(`./contracts/${lendingContract.id}.pdf`, (err, res) => {
        if(err) {
          throw new AppError('Error to create pdf file');
        } else {
          console.log(res);
        }
    });

    return;
  }
}

export default HtmlPDFProvider;
