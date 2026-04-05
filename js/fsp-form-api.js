(function (global) {
  var BASE = (global.__FSP_FORM_API_BASE__ || 'https://fsp-form-submission-backend.vercel.app').replace(/\/$/, '');

  /**
   * POST JSON to the FSP form submission API.
   * @param {string} formTag Stable id (1–200 chars), e.g. index-request-sport
   * @param {Record<string, unknown>} body Plain object (not an array)
   * @returns {Promise<{ ok?: boolean, id?: string, error?: string }>}
   */
  global.fspSubmitForm = function (formTag, body) {
    if (!formTag || typeof formTag !== 'string') {
      return Promise.reject(new Error('Missing form tag'));
    }
    var url = BASE + '/api/submit?formTag=' + encodeURIComponent(formTag);
    var headers = { 'Content-Type': 'application/json' };
    var secret = global.__FSP_SUBMIT_BEARER__;
    if (typeof secret === 'string' && secret.trim()) {
      headers.Authorization = 'Bearer ' + secret.trim();
    }
    var src = typeof body === 'object' && body !== null && !Array.isArray(body) ? body : {};
    var payload = Object.assign({}, src);
    payload._meta = Object.assign({}, payload._meta, {
      page: typeof global.location !== 'undefined' ? global.location.pathname : '',
      submittedAt: new Date().toISOString()
    });
    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    }).then(function (res) {
      return res.json().then(function (data) {
        if (!res.ok) {
          throw new Error((data && data.error) || res.statusText || 'Request failed');
        }
        return data;
      });
    });
  };
})(typeof window !== 'undefined' ? window : this);
