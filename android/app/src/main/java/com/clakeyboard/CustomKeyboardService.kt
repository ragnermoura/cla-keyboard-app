package com.clakeyboard

import android.inputmethodservice.InputMethodService
import android.view.LayoutInflater
import android.view.View

override fun onCreateInputView(): View? {
    val inflater = layoutInflater
    val keyboardView = inflater.inflate(R.layout.keyboard_view, null)

    // Exemplo de como configurar um listener para um botão no teclado
    val keyA = keyboardView.findViewById<Button>(R.id.key_a)
    keyA.setOnClickListener {
        val ic = currentInputConnection
        ic.commitText("A", 1)  // Insere o texto "A" no campo de texto ativo
    }

    return keyboardView
}