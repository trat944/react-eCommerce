// export const searchForProduct = () => {
//   const found = allProducts.array.find(product => product.name.toLowerCase() === inputValue.toLowerCase());
//   if (found) navigate(`/${found.id}`);
//   else if (!found) {
//     const productsContainingWord = allProducts.array.filter(product => {
//       const words = product.name.toLowerCase().split(' ');
//       return words.some(word => word === inputValue.toLowerCase());
//     });
//     if (productsContainingWord.length === 1) navigate(`/${productsContainingWord[0].id}`);
//     else if (productsContainingWord.length > 1) navigate('/search', { state: { foundProducts: productsContainingWord } });
//     else setSearchFailed(true);
//   }
// }