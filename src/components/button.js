import { Link } from 'react-router-dom';


const Button = {
  ButtonPrint: () => (
    <button type="button"
      class="btn button-print text-style-button">
      <i class="fas fa-file-alt"></i>
    </button>
  ),
  ButtonTolak: () => (
    <button type="button"
      class="btn button-danger text-style-button">
      <i class="fas fa-times-circle"></i>
    </button>
  ),
  ButtonTerima: () => (
    <button type="button"
      class="btn button-success text-style-button">
      <i class="fas fa-check"></i>
    </button>
  ),
  ButtonUrutkan: ({ data }) => (
    <button
      type="button"
      onClick={() => alert(data)}
      class="btn button-print text-style-button">
      <i class="fas fa-sort-amount-up me-1 px-1"></i>
      Urutkan
    </button>
  ),
  ButtonKembali: () => (
    <button type="submit" className="border-0 bg-transparent mb-5 label">
      <i class="fas fa-arrow-circle-left me-2"></i>
      Kembali
    </button>)
}

export default Button;