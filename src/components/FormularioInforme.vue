<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h5>1. Información del nuevo producto o cambio importante (NPCI)</h5>
      <div class="mb-3">
        <label class="form-label"><strong>1.1. Clasificación*</strong></label>
        <select
          class="form-select"
          v-model="clasificacion"
          @change="onClasificacion"
        >
          <option value="1">Nuevo producto</option>
          <option value="2">Cambio importante</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">
          <strong> 1.2. Nombre del nuevo producto o cambio importante* </strong>
        </label>
        <input type="text" class="form-control" v-model="nombre" />
      </div>
      <div class="mb-3">
        <label class="form-label">
          <strong>
            1.3. Antecedentes y/o problemática que se busca resolver con el NPCI
          </strong>
        </label>
        <textarea
          class="form-control"
          rows="3"
          v-model="antecedentes"
        ></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label">
          <strong>
            1.4. Descripción del nuevo producto o cambio importante*
          </strong>
        </label>
        <textarea
          class="form-control"
          rows="3"
          v-model="descripcion"
        ></textarea>
      </div>
      <button type="button" class="btn btn-link">Ver archivo</button>
      <div class="my-3">
        <label class="form-label">
          <strong>
            1.5. Descripción del soporte informático relacionado al nuevo
            producto o cambio importante
          </strong>
        </label>
        <p>
          En caso el NPCI implique cambios en el ambiente informático o
          adquisición de nuevas tecnologías, describir la arquitectura
          tecnológica que dará soporte al cambio importante o nuevo producto y
          los proveedores involucrados.
        </p>
        <textarea
          class="form-control"
          rows="3"
          v-model="descripcionSoporte"
        ></textarea>
      </div>
      <button type="button" class="btn btn-link">Ver archivo</button>
      <div class="my-3 row">
        <label class="col-auto col-form-label">
          <strong> {{ labelFecha }} </strong>
        </label>
        <div class="col-auto">
          <input type="date" class="form-control" v-model="fecha" />
        </div>
      </div>

      <checklist :impactos="impactos" :aspectos="aspectos" />

      <h5>2. Informe integral de riesgos</h5>
      <label class="form-label">
        <strong>2.1. Tipos de riesgos asociados*</strong>
      </label>
      <p>
        Seleccione los riesgos que han sido evaluados en el marco del
        lanzamiento del nuevo producto o el desarrollo e implementación del
        cambio importante
      </p>
      <div class="mb-3 row">
        <div class="col-4">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label"> Riesgo de Crédito </label>
          </div>
        </div>
        <div class="col-4">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label"> Riesgo de Mercado</label>
          </div>
        </div>
        <div class="col-4">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label"> Riesgo de Reaseguro</label>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-4">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label">
              Riesgo de lavado de activos y financiamiento del terrorismo (LAFT)
            </label>
          </div>
        </div>
        <div class="col-4">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label"> Riesgo de Reputación</label>
          </div>
        </div>
        <div class="col-4">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label"> Riesgo Estratégico</label>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-4">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label">Riesgo de Liquidez </label>
          </div>
        </div>
        <div class="col-4">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label">Riesgo Técnico</label>
          </div>
        </div>
        <div class="col-4">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" />
            <label class="form-check-label"> Riesgo Operacional</label>
          </div>
        </div>
      </div>
      <p>Adicionalmente, seleccione las opciones que correspondan:</p>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" />
        <label class="form-check-label">
          Entre los riesgos operacionales evaluados se han considerado los
          riesgos asociados a la seguridad de la información y la ciberseguridad
          (SI-C)
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" />
        <label class="form-check-label">
          Entre los riesgos operacionales evaluados se han considerado los
          riesgos asociados a la continuidad del negocio
        </label>
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" />
        <label class="form-check-label">
          Como resultado de la evaluación se identificaron aspectos relacionados
          a conducta de mercado.
        </label>
      </div>
      <div class="row d-flex justify-content-end gx-2">
        <div class="col-auto">
          <button type="submit" class="btn btn-primary">Primary</button>
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-success">Success</button>
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-danger">Danger</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Checklist from "../components/Checklist.vue";
export default {
  components: { Checklist },
  name: "FormularioInforme",
  data() {
    return {
      clasificacion: "1",
      nombre: "",
      antecedentes: "",
      descripcion: "",
      descripcionSoporte: "",
      labelFecha: "1.6. Fecha de lanzamiento del nuevo producto*",
      fecha: "",
      impactos: [
        {
          id: 1,
          selected: false,
          description: "a. Productos o servicios existentes - backoffice",
          answer: "",
        },
        {
          id: 2,
          selected: false,
          description: "b. Productos o servicios existentes - frontoffice",
          answer: "",
        },
        {
          id: 3,
          selected: false,
          description: "c. Canales de atención",
          answer: "",
        },
        {
          id: 4,
          selected: false,
          description:
            "d. Normativa interna de la empresa (políticas, manuales, procedimeintos, etc)",
          answer: "",
        },
        {
          id: 5,
          selected: false,
          description: "e. Estructura organizativa",
          answer: "",
        },
        {
          id: 6,
          selected: false,
          description:
            "f. Sedes (oficinas, centros de procesamiento, agencias, etc)",
          answer: "",
        },
        {
          id: 7,
          selected: false,
          description: "g. Hardware",
          answer: "",
        },
        {
          id: 8,
          selected: false,
          description: "h. Software - Sistema informático principal (Core)",
          answer: "",
        },
        {
          id: 9,
          selected: false,
          description: "i. Software - Otros",
          answer: "",
        },
        {
          id: 10,
          selected: false,
          description: "j. Procesamiento de datos en el exterior",
          answer: "",
        },
        {
          id: 11,
          selected: false,
          description: "k. Bienes o servicios provistos por terceros",
          answer: "",
        },
        {
          id: 12,
          selected: false,
          description: "l. Pólizas de seguro",
          answer: "",
        },
      ],
      aspectos: [
        {
          id: 1,
          selected: false,
          description: "a. On boarding digital",
          answer: "",
        },
        {
          id: 2,
          selected: false,
          description: "b. Billeteras electrónicas",
          answer: "",
        },
        {
          id: 3,
          selected: false,
          description: "c. Firma digital",
          answer: "",
        },
        {
          id: 4,
          selected: false,
          description: "d. Alianzas fintech",
          answer: "",
        },
        {
          id: 5,
          selected: false,
          description: "e. Procesamiento en nube",
          answer: "",
        },
        {
          id: 6,
          selected: false,
          description:
            "f. Digitalizacion de procesos o transformación digital de su empresa",
          answer: "",
        },
        {
          id: 7,
          selected: false,
          description: "g. Ingreso a nuevos mercados",
          answer: "",
        },
        {
          id: 8,
          selected: false,
          description:
            "h. Implementación o modificación de algún modelo de riesgos (crédito, mercado, liquidez, operacional o LAFT)",
          answer: "",
        },
        {
          id: 9,
          selected: false,
          description:
            "i. Implementación o modificación de alguna metodología de riesgos (Crédito, mercado, liquidez u operacional)",
          answer: "",
        },
      ],
    };
  },
  methods: {
    onClasificacion() {
      if (this.clasificacion === "1") {
        this.labelFecha = "1.6. Fecha de lanzamiento del nuevo producto*";
      } else {
        this.labelFecha =
          "1.6. Fecha estimada de implementación del cambio importante*";
      }
    },
    onSubmit() {
      console.log("onSubmit");
    },
  },
};
</script>

<style>
</style>
