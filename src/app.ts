// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {id: 1, name: "Dóra", photo: "img1", sex: "female", age: 21, health: 100}, 
    {id: 2, name: "György", photo: "img2", sex: "male", age: 59, health: 100}, 
    { id: 3, name: "Ágnes", photo: "img3", sex: "male", age: 36, health: 100 }
]

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    {id: 11, name: "Transformer1", wings: 5, wheels: 3, clan: "clan1"},
    {id: 12, name: "Transformer2", wings: 3, wheels: 6, clan: "clan2"},
    {id: 13, name: "Transformer3", wings: 2, wheels: 9, clan: "clan3"}
];
