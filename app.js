(function () {
  'use strict';

  var form = document.getElementById('config-form');
  var apiBaseInput = document.getElementById('api-base-url');
  var publicKeyInput = document.getElementById('public-key');
  var clearButton = document.getElementById('clear-button');
  var status = document.getElementById('status');
  var widgetScript;

  function setStatus(message, state) {
    status.textContent = message;
    status.dataset.state = state || '';
  }

  function removeWidget() {
    if (widgetScript) {
      widgetScript.remove();
      widgetScript = null;
    }
    var root = document.getElementById('agc-chatbot-root');
    if (root) root.remove();
    var widgetCss = document.querySelector('link[data-agc-chatbot-css="true"]');
    if (widgetCss) widgetCss.remove();
    var sdk = document.querySelector('script[data-agc-chatbot-sdk="true"]');
    if (sdk) sdk.remove();
    delete window.AGCChatbot;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var apiBaseUrl = apiBaseInput.value.trim().replace(/\/$/, '');
    var publicKey = publicKeyInput.value.trim();

    if (!apiBaseUrl) {
      setStatus('Ingresá la URL base de la Ticketera.', 'error');
      return;
    }

    removeWidget();
    window.AGCChatbotConfig = {
      apiBaseUrl: apiBaseUrl,
      publicKey: publicKey,
      autoOpen: false
    };

    widgetScript = document.createElement('script');
    widgetScript.src = apiBaseUrl + '/js/agc-chatbot-widget.js';
    widgetScript.async = true;
    widgetScript.onload = function () {
      setStatus('Widget cargado. Usá el botón que apareció abajo a la derecha.', 'success');
    };
    widgetScript.onerror = function () {
      setStatus('No se pudo cargar el widget. Revisá la URL y que la Ticketera esté disponible.', 'error');
    };
    document.body.appendChild(widgetScript);
    setStatus('Cargando el widget...', '');
  });

  clearButton.addEventListener('click', function () {
    removeWidget();
    delete window.AGCChatbotConfig;
    setStatus('Widget quitado. Podés cargar otra configuración.', '');
  });
}());
