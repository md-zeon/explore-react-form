/**
 * 1. e.target.[name of the input field].value
 * 2. use form action and formData in the action handler. formData.get('name of the input field');
 * 3. controlled component use State on change of the field. one per each field. useful to dynamically handle error.
 * 3. handle a;; controlled field on one state object
 * const [formData, setFormData] = useState({name: '', pass: '', phone: ''})
 * 4. uncontrolled using useRef
 * 5. Hook Form
 */
