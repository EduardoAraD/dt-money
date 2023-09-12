import { Header } from "../../components/Header";
import { SearchForm } from "./components/SearchForm";
import { Summary } from "../../components/Summary";

import { PriceHighLigth, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento do site</td>
              <td>
                <PriceHighLigth variant="income">
                  R$ 12.000,00
                </PriceHighLigth>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width='50%'>Hamburguer</td>
              <td>
                <PriceHighLigth variant="outcome">
                  - R$ 59,00
                </PriceHighLigth>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}