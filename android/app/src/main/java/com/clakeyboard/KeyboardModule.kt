package com.clakeyboard

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class KeyboardModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "KeyboardModule"
    }

    @ReactMethod
    fun showKeyboard() {
        // Método para mostrar o teclado
    }

    @ReactMethod
    fun hideKeyboard() {
        // Método para esconder o teclado
    }
}
