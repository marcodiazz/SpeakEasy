import { create } from "zustand";

interface WordsStorage {
    words: string[]
    addWord: (string) => void
    deleteWord: (string) => void,
    reset: () => void
}

const useStoreWords = create<WordsStorage>()((set) => ({
    words: [],
    addWord: (newWord) => set((state)=> ({
        words: [...state.words, newWord]
    })),
    deleteWord: (word) => set((state)=> ({
        words: state.words.filter((iword) => iword != word)
        // words: arraySinPalabra(word, state)
    })),
    reset: () => set(() => ({
        words: []
    }))
}))

export {
    useStoreWords
}