const itens = [1, 2, 3];

const success = () => 'success';

const hasNumber = (item, callback) => {
  if (itens.includes(item)) {
    console.log(exportedFunctions.success());

    callback();
  }
};

const exportedFunctions = {
  success,
  hasNumber
};

module.exports = exportedFunctions;
